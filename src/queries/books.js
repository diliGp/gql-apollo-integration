import { gql } from "apollo-boost";

const getAllBooks = gql`
    {
        books{
            id
            name
            genre
        }
    }
`;

const getBook = gql`
    query($id: ID!){
        book(id: $id){
            name
            genre
            author{
                name
                age
            }
        }
    }
`;

export {
    getAllBooks,
    getBook
}