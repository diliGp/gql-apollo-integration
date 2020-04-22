class BaseApi {
    baseUrl = `https://jsonplaceholder.typicode.com`;
    gqlApiUrl = `http://localhost:7900`;

    headers = {
        "Content-type": "application/json; charset=UTF-8"
    };

    endpoints = {
        posts: {
            all: `${this.baseUrl}/posts`,
            one: (id) => `${this.baseUrl}/posts/${id}`,
        },
        books: {
            all: `${this.gqlApiUrl}/graphql`,
            one: `${this.gqlApiUrl}/graphql`,
        }
    }

    setHeaders(headers) {
        this.headers = {
            ...this.headers,
            headers
        }
    }
}

export default BaseApi;