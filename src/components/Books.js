import React, { useState, useEffect } from 'react'
import './styles.css'
import { useQuery } from '@apollo/react-hooks'
import Book from './Book'
import { getAllBooks } from '../GQL/queries/books'
import { onBookAdded } from '../GQL/subscriptions/books'


const Books = () => {
    const [selectedBookId, setSelectedBookId] = useState();
    const { loading, data, error, subscribeToMore } = useQuery(getAllBooks);

    useEffect(() => {
        /**
         * Adds newly created data into the original data object using subscription. 
         */
        subscribeToMore({
            document: onBookAdded,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newBook = subscriptionData.data.bookAdded;
                
                /** 
                 * Return new data of books 
                 */
                return {
                    ...prev,
                    books: [
                        ...prev.books,
                        newBook
                    ]
                }
            }
        })
    }, []);

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
