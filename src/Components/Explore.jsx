import React from 'react';

const Explore = () => {
    return (
        <section className="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>
                        Explore more <span>purple</span>
                    </h2>
                    <Link to="/books" >
                    <button className="btn">Explore books</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Explore;
