import React from 'react'
import { connect } from 'react-redux';

const Book = ({ book, processing, error }) => {
    if (processing) return <p>Loading...</p>
    if (error) return <p>Error fetching book!!</p>
    if(!book || !book.name) return null;

    return (
        <section>
            <h3>{book.name}</h3>
            <div className="info-section">
                <p>Genre: {book.genre}</p>
                <p>Author: {book.author.name} ({book.author.age})</p>
            </div>
        </section>
    )
}

const mapStoreToProps = (store) => ({
    book: store.books.currentBook,
    processing: store.books.processing,
    errors: store.books.errors,
});

export default connect(mapStoreToProps)(Book)
