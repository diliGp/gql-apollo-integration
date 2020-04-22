import { actionTypes } from "./actionTypes";
import produce from "immer";

const initialState = {
    processing: false,
    posts: [],
    currentPost: {},
    errors: {
        values: ''
    }
}

const postsReducers = (state = initialState, action) => {
    return produce(state, draftState => {
        switch (action.type) {
            case actionTypes.fetchAll.request:
                draftState = {
                    ...draftState,
                    processing: true
                };
                return draftState;

            case actionTypes.fetchAll.success:
                draftState = {
                    ...draftState,
                    processing: false,
                    posts: action.payload
                };
                return draftState;

            case actionTypes.fetchAll.failure:
                draftState = {
                    ...draftState,
                    processing: false,
                    errors: action.payload
                };
                return draftState;
            case actionTypes.fetchOne.request:
                draftState = {
                    ...draftState,
                    processing: true
                };
                return draftState;

            case actionTypes.fetchOne.success:
                draftState = {
                    ...draftState,
                    processing: false,
                    currentPost: action.payload
                };
                return draftState;

            case actionTypes.fetchOne.failure:
                draftState = {
                    ...draftState,
                    processing: false,
                    errors: action.payload
                }
                return draftState;

            default:
                return draftState;
        }
    });
}
export default postsReducers;