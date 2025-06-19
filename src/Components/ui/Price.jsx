import React from 'react'

const price = ({ salePrice,originalPrice}) => {
  return (
    <div className="book__price">
        {
            salePrice ?
            <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
              </span>
            ${book.salePrice.toFixed(2)}
            </>
            : (
                <>${originalPrice}</>
        )}
        
      </div>
  )
}

export default price
