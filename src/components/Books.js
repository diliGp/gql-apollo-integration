import React from 'react'
import '../styles.css'
import Book from './Book'
import { connect } from 'react-redux'
import { bookActions } from '../store/books/actionCreator'


const Books = ({ books, processing, error, getBook }) => {
    if (processing) return <p>Loading...</p>
    if (error) return <p>Error fetching list...</p>


    const getBookDetails = (book_id) => {
        if (!book_id) {
            return;
        }

        getBook(book_id);
    }

    return (
        <>
            <ul className="grid">
                {
                    books && books.length > 0 &&
                    books.map(book => (
                        <li key={book.id} onClick={() => getBookDetails(book.id)}>
                            <h3>{book.name}</h3>
                            <div className="info-section">
                                <p>Genre: {book.genre}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <Book />
        </>
    )
}


const mapStoreToProps = (store) => ({
    books: store.books.books,
    processing: store.books.processing,
    errors: store.books.errors,
});

const mapActionsToProps = {
    getBook: bookActions.book.request
}

export default connect(mapStoreToProps, mapActionsToProps)(Books);
