import './App.css';
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Todo from './todo';
import GridDemo from './ag-grid-demo';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"
import ApiDemo from './api-demo';

function App() {
const [title, setTitle] = useState('');

const [body, setBody] = useState('');
const [posts, setPosts] = useState([]);
const addPosts = async (userid,title, body) => {
  await fetch('https://jsonplaceholder.typicode.com/posts', {
     method: 'POST',
     body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
     }),
     headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
  })
     .then((response) => response.json())
     .then((data) => {
        setPosts((posts) => [data, ...posts]);
        setTitle('');
        setBody('');
     })
     .catch((err) => {
        console.log(err.message);
     });
};

const handleSubmit = (e) => {
  e.preventDefault();
  addPosts(title, body);
};    
  return (
<div>
  {/* <GridDemo/> */}
  <div className="app">
    <br/>
    <br/>
      <div className="add-post-container">
         <form onSubmit={handleSubmit}>
          Title:
            <input type="text" className="form-control" value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <br/>
            Description:
            <textarea name="" className="form-control" id="" cols="10" rows="8" 
               value={body} onChange={(e) => setBody(e.target.value)} 
            ></textarea>
            <br/>
            <button type="submit">Add Post</button>
         </form>
      </div>
      <br/>
      <hr/>
      Post Details:
      <hr/>
      <ApiDemo />
   </div>
  
  
</div>
  );
}

export default App;
