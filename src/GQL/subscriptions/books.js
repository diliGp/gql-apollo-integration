import { gql } from "apollo-boost";

export const onBookAdded = gql`
    subscription {
        bookAdded {
            id
            name
            genre
        }
    }
`;