import React from 'react'
import { connect } from 'react-redux';

const Post = ({ post }) => {
    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </article>
    )
}

const mapStoreToProps = (store) => ({
    post: store.posts.currentPost
});

export default connect(mapStoreToProps)(Post)
