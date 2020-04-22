import { postActions } from "./actionCreator";
import APIs from "../../services/APIs";

const getPosts = () => {
    return async (dispatch) => {
        try {
            const { data } = await APIs.posts.getList();
            dispatch(postActions.posts.success(data));
        } catch (error) {
            dispatch(postActions.posts.failure(error.message));
        }
    }
}

const getPost = (postId) => {
    return async (dispatch) => {
        try {
            const { data } = await APIs.posts.getOne(postId);
            dispatch(postActions.post.success(data));
        } catch (error) {
            dispatch(postActions.post.failure(error.message));
        }
    }
}

export {
    getPost,
    getPosts
}