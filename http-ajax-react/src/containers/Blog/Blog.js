import React, { Component } from 'react';
import axios from '../../axios';

import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedId: null,
        error: false
    }

    selectedPost = (id) => {
        this.setState({selectedId: id})
    }

    componentDidMount() {
        console.log('[Blog.js] componentDidMount')
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
            this.setState({error: true})
        });
    }

    render () {
        console.log('[blog.js] render')
        let posts = <p style={{textAlign: 'center'}}>Error occured!!</p>;
        if(!this.state.error) {
            posts = this.state.posts.map((post) => {
                return <Post key={post.id} 
                            author={post.author} 
                            title={post.title} 
                            clicked={() => {this.selectedPost(post.id)}} />;
            });
        } 

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
            </div>
        );
    }
}

export default Blog;