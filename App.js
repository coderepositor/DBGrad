import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Todo from './todo';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todo></Todo>
      </Provider>
    </div>
  );
}

export default App;
