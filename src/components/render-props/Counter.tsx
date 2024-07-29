import React, { useState } from 'react'

interface CounterProps {
    children: (sum: number, sumNum: () => void) => React.ReactNode
}
export const Counter: React.FC<CounterProps> = ({ children }) => {
    const [sum, setSum] = useState(0);

    const sumNum = () => setSum(sum + 2);
  return (
    <>
      {children(sum, sumNum)}
    </>
  )
}
