import { gql } from "apollo-boost";

export const addNewBook = gql`
    mutation($name: String!, $genre: String!, $author: ID!) {
        addBook(name: $name, genre: $genre, author: $author) {
            id
        }
    }
`;