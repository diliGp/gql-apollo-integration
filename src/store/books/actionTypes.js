const actionTypes = {
    fetchAll: {
        request: 'BOOKS_FETCH_REQUEST',
        success: 'BOOKS_FETCH_SUCCESS',
        failure: 'BOOKS_FETCH_ERROR'
    },
    fetchOne: {
        request: 'BOOK_FETCH_REQUEST',
        success: 'BOOK_FETCH_SUCCESS',
        failure: 'BOOK_FETCH_ERROR'
    },
    processing: 'SET_FETCH_PROCESSING'
};

export {
    actionTypes
}