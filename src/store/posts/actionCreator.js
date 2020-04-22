import { actionTypes } from "./actionTypes";
import { getPosts, getPost } from "./thunk";


export const postActions = {
    posts: {
        request: getPosts,
        success: (payload) => ({
            type: actionTypes.fetchAll.success,
            payload
        }),
        failure: (payload) => ({
            type: actionTypes.fetchAll.failure,
            payload
        })
    },
    post: {
        request: (postId) => getPost(postId),
        success: (payload) => ({
            type: actionTypes.fetchOne.success,
            payload
        }),
        failure: (payload) => ({
            type: actionTypes.fetchOne.failure,
            payload
        })
    }
};