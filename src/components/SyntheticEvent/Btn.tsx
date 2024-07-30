import React from 'react'

export const Btn = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }
  return (
    <button onClick={handleClick}>Click here</button>
  )
}
