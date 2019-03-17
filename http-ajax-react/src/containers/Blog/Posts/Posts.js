import React, { Component } from 'react';
import axios from '../../../axios';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

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
        // this.setState({selectedId: id})
        this.props.history.push('/posts/' + id);
    }

    render() {
        console.log('[Posts.js] render')
        let posts = <p style={{textAlign: 'center'}}>Error occured!!</p>;
        if(!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                // <Link to={'/posts/' + post.id} key={post.id}>
                    <Post 
                        key={post.id}
                        author={post.author} 
                        title={post.title} 
                        clicked={() => {this.selectedPost(post.id)}} />
                // </Link>
                );    
            });
        } 

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;