import React, { useEffect, useState } from "react"
import toast from "react-hot-toast";

export interface PokeData {
    name: string;
    url?: string;
}
export interface PokeDataProps {
    data ?: PokeData[];
    loading?: boolean;
}

export const pokeData = (WrappedComponent: React.ComponentType<PokeDataProps>) => {
  return function GetData (props: React.ComponentProps<typeof WrappedComponent>) {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<PokeData[]>([]);

    const fetchData = async () => {
        const pokeNum = 4;
        try{
            setLoading(true);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokeNum}&offset=0`);
            const data = await response.json();
            setData(data.results);
            
        } catch(error){
            toast.error('Error fetching data', { duration: 2500 });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    

    return <WrappedComponent {...{...props, loading, data }}/>
  };
};
