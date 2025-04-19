import React from 'react';
import UndrawBooks from '../assets/Undraw_Books.svg';

const Landing = () => {
    return (
        <section id='landing'>
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Australia'a mostawarded online library platform</h1>
                        <h2>Find your dream book <span className="purple">library</span></h2>
                        <a href="#features">
                            <button className="btn">Browse Books</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing;