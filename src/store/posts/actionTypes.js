const actionTypes = {
    fetchAll: {
        request: 'POSTS_FETCH_REQUEST',
        success: 'POSTS_FETCH_SUCCESS',
        failure: 'POSTS_FETCH_ERROR'
    },
    fetchOne: {
        request: 'POST_FETCH_REQUEST',
        success: 'POST_FETCH_SUCCESS',
        failure: 'POST_FETCH_ERROR'
    }
};

export {
    actionTypes
}