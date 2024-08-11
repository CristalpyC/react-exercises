import React from 'react'

export const CloneElement = () => {
    const originalElement = <button>Clic me</button>
    const clonedElement = React.cloneElement(originalElement, { onClick: () => console.log('HEY')})
  return (
    <div>
        {clonedElement}
    </div>
  )
}
