<<<<<<< HEAD
import React from 'react'
import { books } from '../../data'

const price = ({ salePrice,originalPrice}) => {
  return (
    <div className="book__price">
        {
            salePrice ?
            <>
            <span className="book__price--normal">
              ${originalPrice.toFixed(2)}
              </span>
            ${salePrice.toFixed(2)}
            </>
            : (
                <>${originalPrice}</>
        )}
        
      </div>
  )
}

export default price
=======
import React from 'react'
import { books } from '../../data'

const price = ({ salePrice,originalPrice}) => {
  return (
    <div className="book__price">
        {
            salePrice ?
            <>
            <span className="book__price--normal">
              ${originalPrice.toFixed(2)}
              </span>
            ${salePrice.toFixed(2)}
            </>
            : (
                <>${originalPrice.toFixed(2)}</>
        )}
        
      </div>
  )
}

export default price
>>>>>>> cef2fb0eff3fcae018d85ad42a39bdd3a02b2a67
