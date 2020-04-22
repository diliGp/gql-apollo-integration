import BaseApi from "./BaseApi";
import Axios from "axios";

class PostsApi extends BaseApi {

    getList() {
        return Axios.get(this.endpoints['posts'].all, {
            headers: this.headers
        });
    }

    getOne(id) {
        const endpoint = this.endpoints['posts'].one(id);
        return Axios.get(endpoint, {
            headers: this.headers
        });
    }

}

export default PostsApi;
