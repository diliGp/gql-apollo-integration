import React from 'react';
import { connect } from 'react-redux';
import { postActions } from '../store/posts/actionCreator';
import Post from './Post';

const Posts = ({ posts, post, getPost }) => {

    const getPostDetails = (event) => {
        if (event.target.tagName.toLowerCase() !== 'li') {
            return;
        }

        const post_id = event.target.getAttribute('data-id');
        if (!post_id) {
            return;
        }
        
        getPost(post_id);
    }

    return (
        <>
            <section className="row">
                <section className="col60">
                    <ul className="list" onClick={getPostDetails}>
                        {
                            posts && posts.length > 0 ? posts.map(({ id, title }) => (
                                <li key={id} data-id={id}>{title}</li>
                            )) : ''
                        }
                    </ul>
                </section>
                <aside className="description-section col40">
                    <Post />
                </aside>
            </section>
        </>
    )
}

const mapStateToProps = (store) => ({
    posts: store.posts.posts,
    post: store.posts.post,
})

const mapActiosToProps = {
    getPost: postActions.post.request,
}

export default connect(mapStateToProps, mapActiosToProps)(Posts);
