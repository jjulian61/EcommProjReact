import React from 'react'
import { books } from '../data.js';

const price = ({ salePrice,originalPrice}) => {
  return (
    <div className="book__price">
        {
            salePrice ?
            <>
            <span className="book__price--normal">
              ${books.originalPrice.toFixed(2)}
              </span>
            ${books.salePrice.toFixed(2)}
            </>
            : (
                <>${originalPrice}</>
        )}
        
      </div>
  )
}

export default price
