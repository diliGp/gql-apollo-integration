import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getBook } from '../queries/books'

const Book = ({ id }) => {
    const { loading, data, error } = useQuery(getBook, {
        variables: { id }
    });

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error fetching book!!</p>

    return (
        <section>
            <h3>{data.book.name}</h3>
            <div className="info-section">
                <p>Genre: {data.book.genre}</p>
                <p>Author: {data.book.author.name} ({data.book.author.age})</p>
            </div>
        </section>
    )
}

export default Book
