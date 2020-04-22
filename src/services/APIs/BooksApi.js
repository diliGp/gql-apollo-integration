import Axios from "axios";
import BaseApi from "./BaseApi";

class BooksApi extends BaseApi {
    getAllBooksQuery = `
        {
            books{
                id
                name
                genre
            }
        }
    `;

    getBookQuery = `
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
    `

    getList() {
        return Axios.post(this.endpoints['books'].all, {
            query: this.getAllBooksQuery
        })
    }

    getOne(id) {
        return Axios.post(this.endpoints['books'].one, {
            query: this.getBookQuery,
            variables: { id }
        });
    }

}

export default BooksApi;
