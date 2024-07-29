import React, { useEffect, useState } from 'react';


// Define los props que serán pasados al componente envuelto
export interface WithDataFetchProps {
  data?: null;
  loading?: boolean;
  error?: string | null;
}

// HOC - Higher Order Component
export const withDatFetch = (WrappedComponent: React.ComponentType<WithDataFetchProps>) => {
  return function WithDataFetch(props: React.ComponentProps<typeof WrappedComponent>) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError('Data error');
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    // Pasar los props originales y los props adicionales al componente envuelto
    return <WrappedComponent {...{...props, data, loading, error}}/>
  };
};
