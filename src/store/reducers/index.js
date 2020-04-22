import { combineReducers } from "redux";
import postsReducers from "../posts/reducer";
import booksReducers from "../books/reducer";

const rootReducers = combineReducers({
    posts: postsReducers,
    books: booksReducers
});

export default rootReducers;