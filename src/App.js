import React, { Component } from 'react';
import './App.css';
import PostBody from "./PostBody";
import Commentbox from "./Commentbox";
class App extends Component {
  render() {
    return (
      <div>
        <PostBody  />
        <Commentbox  />
      </div>
    );
  }
}

export default App;
