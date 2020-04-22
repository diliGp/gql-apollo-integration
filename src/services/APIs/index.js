import PostsApi from "./PostsApi";
import BooksApi from "./BooksApi";

const APIs = {
    posts: new PostsApi(),
    books: new BooksApi()
};

export default APIs;