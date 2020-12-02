import './App.css';
import React, {Component} from "react";
import HeaderDiv from "./components/header&footer/HeaderDiv";
import FooterDiv from "./components/header&footer/FooterDiv";
import LandingPage from "./components/home/LandingPage";
import { Provider } from "react-redux";
import Movie from "./components/home/Movie";
import {HashRouter as Router, Route } from "react-router-dom";
import store from './store/store';

class App extends Component {
render () {
  return (
   <Provider store={store}>
      <Router>
      <div>
      <HeaderDiv/>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/movie/:id" component={Movie}/>
      <FooterDiv/>
      </div>
      </Router>
   </Provider>
  );
 }
}

export default App;
 