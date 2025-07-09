<<<<<<< HEAD
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating = ({ rating }) => {
    return (
        <div className="book__ratings">
            {
                new Array(Math.floor(rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index} />)
            }
            {
                !Number.isInteger(rating)  && <FontAwesomeIcon icon="star-half-alt" />
        }

        </div>
    )
}

export default Rating;
=======
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating = ({ rating }) => {
    return (
        <div className="book__ratings">
            {
                new Array(Math.floor(rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index} />)
            }
            {
                !Number.isInteger(rating)  && <FontAwesomeIcon icon="star-half-alt" />
        }

        </div>
    )
}

export default Rating;
>>>>>>> cef2fb0eff3fcae018d85ad42a39bdd3a02b2a67
