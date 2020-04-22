import { actionTypes } from "./actionTypes";
import { getBooks, getBook } from "./thunk";


export const bookActions = {
    books: {
        request: getBooks,
        success: (payload) => ({
            type: actionTypes.fetchAll.success,
            payload
        }),
        failure: (payload) => ({
            type: actionTypes.fetchAll.failure,
            payload
        }),
    },
    book: {
        request: (bookId) => getBook(bookId),
        success: (payload) => ({
            type: actionTypes.fetchOne.success,
            payload
        }),
        failure: (payload) => ({
            type: actionTypes.fetchOne.failure,
            payload
        })
    },
    processing: () => ({
        type: actionTypes.processing
    })
};