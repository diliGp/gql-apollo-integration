import React, { useState } from 'react'
import './styles.css'
import { getAllBooks } from '../queries/books'
import { useQuery } from '@apollo/react-hooks'
import Book from './Book'


const Books = () => {
    const [selectedBookId, setSelectedBookId] = useState();

    const { loading, data, error } = useQuery(getAllBooks);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error fetching list...</p>

    return (
        <>
            <ul>
                {
                    data.books && data.books.length > 0 &&
                    data.books.map(book => (
                        <li key={book.id} onClick={() => setSelectedBookId(book.id)}>
                            <h3>{book.name}</h3>
                            <div className="info-section">
                                <p>Genre: {book.genre}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
            {selectedBookId && <Book id={selectedBookId} />}
        </>
    )
}

export default Books
