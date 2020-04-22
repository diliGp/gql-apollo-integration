import { actionTypes } from "./actionTypes";
import produce from "immer";

const initialState = {
    processing: false,
    books: [],
    currentBook: {},
    errors: {
        values: ''
    }
}

const booksReducers = (state = initialState, action) => {
    return produce(state, draftState => {
        switch (action.type) {
            case actionTypes.fetchAll.processing:
                draftState = {
                    ...draftState,
                    processing: true
                };
                return draftState;

            case actionTypes.fetchAll.success:
                draftState = {
                    ...draftState,
                    processing: false,
                    books: action.payload
                };
                return draftState;

            case actionTypes.fetchAll.failure:
                draftState = {
                    ...draftState,
                    processing: false,
                    errors: action.payload
                };
                return draftState;

            case actionTypes.fetchOne.success:
                draftState = {
                    ...draftState,
                    processing: false,
                    currentBook: action.payload
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
export default booksReducers;