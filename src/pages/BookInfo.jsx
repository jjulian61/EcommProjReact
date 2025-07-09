<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Price from "../Components/ui/Price"
import Rating from "../Components/ui/Rating"
import Book from "../Components/ui/Book"



const BookInfo = ({ books, addToCart }) => {
    const [added, setAdded] = useState(false);
    const { id } = useParams();
    const book = books.find((book) => +book.id === +id);
    const [cart] = useState([]);

    function addBookTocart(book) {
        setAdded(true);
        addToCart(book)
    }

    function bookExistsOnCart() {
        return cart.find(book => book.id === +id);
    }

    return (
        <div id='books__body'>
            <main id='books__main'>
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/book" className="book__link"><h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                </div>
                                <h3 className="book__summary--title">
                                    Summary
                                </h3>
                                <p className="book__summary--para">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos dolore fuga dolorem recusandae vel sit eaque aspernatur vero facere autem tempore natus eius ut, eveniet temporibus iusto ullam, eos eligendi!
                                </p>
                                <p className="book__summary--para">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos dolore fuga dolorem recusandae vel sit eaque aspernatur vero facere autem tempore natus eius ut, eveniet temporibus iusto ullam, eos eligendi!
                                </p>
                                    {bookExistsOnCart() ? (
                                    <Link to={'/cart'} className="book__link">
                                    <button className="btn">Checkout</button>
                                    </Link>
                                ) : (
                                    <button className="btn" oncClick={() => addBookTocart(book)}>
                                Add to cart
                            </button>
                        )}
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="books__selected--top">
                        <h2 className="book__selected--title--top">
                            Recommended Books
                        </h2>
                    </div>
                    {
                        books
                        .filter(book => book.rating === 5 && +book.id !== +id)
                        .slice(0, 4)
                        .map(book =>  (
                        <Book book={book} key={book.id} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default BookInfo;
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Price from "../Components/ui/Price"
import Rating from "../Components/ui/Rating"
import Book from "../Components/ui/Book"



const BookInfo = ({ books, addToCart }) => {
    const [added, setAdded] = useState(false);
    const { id } = useParams();
    const book = books.find((book) => +book.id === +id);
    const [cart] = useState([]);

    function addBookTocart(book) {
        setAdded(true);
        addToCart(book)
    }

    function bookExistsOnCart() {
        return cart.find(book => book.id === +id);
    }

    return (
        <div id='books__body'>
            <main id='books__main'>
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/book" className="book__link"><h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                </div>
                                <h3 className="book__summary--title">
                                    Summary
                                </h3>
                                <p className="book__summary--para">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos dolore fuga dolorem recusandae vel sit eaque aspernatur vero facere autem tempore natus eius ut, eveniet temporibus iusto ullam, eos eligendi!
                                </p>
                                <p className="book__summary--para">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos dolore fuga dolorem recusandae vel sit eaque aspernatur vero facere autem tempore natus eius ut, eveniet temporibus iusto ullam, eos eligendi!
                                </p>
                                    {bookExistsOnCart() ? (
                                    <Link to={'/cart'} className="book__link">
                                    <button className="btn">Checkout</button>
                                    </Link>
                                ) : (
                                    <button className="btn" oncClick={() => addBookTocart(book)}>
                                Add to cart
                            </button>
                        )}
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="books__selected--top">
                        <h2 className="book__selected--title--top">
                            Recommended Books
                        </h2>
                    </div>
                    {
                        books
                        .filter(book => book.rating === 5 && +book.id !== +id)
                        .slice(0, 4)
                        .map(book =>  (
                        <Book book={book} key={book.id} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default BookInfo;
>>>>>>> cef2fb0eff3fcae018d85ad42a39bdd3a02b2a67
