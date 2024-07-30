import { useState } from 'react'
import { flushSync } from 'react-dom';

export const FlusBtn = () => {
    const [count, setCount] = useState(0);

  const handleClick = () => {
    // Actualización de estado sin flushSync (asíncrona)
    // setCount(count + 1);
    // console.log('El valor de count después de setCount:', count);

    // Actualización de estado con flushSync (síncrona)
    flushSync(() => {
      setCount(count + 1);
    });
    console.log('El valor de count después de flushSync:', count);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}
