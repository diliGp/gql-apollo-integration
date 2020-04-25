import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { addNewBook } from '../GQL/mutations/books';

const AddBook = () => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [author, setAuthor] = useState('');

    const [setBook, { error }] = useMutation(addNewBook);
    if (error) return <p>Error adding new book!! :(</p>

    const addBookHandler = () => {
        setBook({
            variables: { name, genre, author }
        });
        setName('');
        setGenre('');
        setAuthor('');
    };

    return (
        <div>
            <input
                type="text" name="name" value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Type name"
            />
            <input
                type="text" name="genre" value={genre}
                onChange={event => setGenre(event.target.value)}
                placeholder="Type genre"
            />
            <input
                type="text" name="author" value={author}
                onChange={event => setAuthor(event.target.value)}
                placeholder="Type author"
            />
            <button onClick={addBookHandler}>Add New Book</button>
        </div>
    )
}

export default AddBook;
