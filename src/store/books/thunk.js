import { bookActions } from "./actionCreator";
import APIs from "../../services/APIs";

const getBooks = () => {
    return async (dispatch) => {
        try {
            dispatch(bookActions.processing());
            
            const { data } = await APIs.books.getList();
            dispatch(bookActions.books.success(data.data.books));
        } catch (error) {
            dispatch(bookActions.books.failure(error.message));
        }
    }
}

const getBook = (bookId) => {
    return async (dispatch) => {
        try {
            dispatch(bookActions.processing());
            const { data } = await APIs.books.getOne(bookId);
            console.log('data:  ', data);
            dispatch(bookActions.book.success(data.data.book));
        } catch (error) {
            dispatch(bookActions.book.failure(error.message));
        }
    }
}

export {
    getBook,
    getBooks
}