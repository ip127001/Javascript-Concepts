import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log('[Posts.js] componentDidMount');
        console.log(this.props);
        axios.get('/posts')
        .then((response) => {
            const updatedPosts = response.data.slice(0, 4).map(post => {
                return {
                    ...post,
                    author: 'Rohit'
                }
            });
            this.setState({posts: updatedPosts})
            //console.log(response);
        })
        .catch(err => {
            console.log(err);
            // this.setState({error: true})
        });
    }

    selectedPost = (id) => {
        this.setState({selectedId: id})
    }

    render() {
        console.log('[blog.js] render')
        let posts = <p style={{textAlign: 'center'}}>Error occured!!</p>;
        if(!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                <Link to={'/' + post.id} key={post.id}>
                    <Post 
                        author={post.author} 
                        title={post.title} 
                        clicked={() => {this.selectedPost(post.id)}} />
                </Link>
                );    
            });
        } 

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;