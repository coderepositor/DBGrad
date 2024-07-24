import React, { useState, useEffect } from 'react';

const ApiDemo = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
    <div className="posts-container">
       {posts.map((post) => {
          return (
             <div className="post-card" key={post.id}>
                <h2 className="post-title">{post.userId}</h2>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
                <div className="button">
                <div className="delete-btn">Delete</div>
                </div>
             </div>
          );
       })}
    </div>
    );
};

export default ApiDemo