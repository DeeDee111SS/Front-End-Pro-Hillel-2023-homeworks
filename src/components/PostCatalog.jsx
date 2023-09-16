import React from 'react';

class PostCatalog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []          
        };
    }
    
    async componentDidMount() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            this.setState({ posts: data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    render() {
        const { posts } = this.state;        
    
        return (
            <div className="posts">
                <ul className="posts__list">
                    {posts.map((post) => (
                        <li key={post.id} className="posts_single-post card mt-2" data-post-id={post.id}>
                            <div className="card-body">
                                <h3 className="posts__post-title card-title">{post.title}</h3>
                                <p className="posts__post-description card-text">{post.body}</p> 
                                <button type="button" className="btn btn-primary">Go somewhere</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default PostCatalog;