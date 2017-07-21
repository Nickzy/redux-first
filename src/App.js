import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Link} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux"
import Post from "./Post";
import Home from "./Home";
const Header = () => (
  <Link to="/" className="back-home">首页</Link>
)
class App extends Component {

  render() {
    return (
          <Provider store={store}>
      		  <BrowserRouter>
              <div>
                <Header />
                <Route path="/post/:id" component={Post}/>
                <Route path="/" exact component={Home}/>
              </div>
        		</BrowserRouter>
          </Provider>
    );
  }
}

export default App;
