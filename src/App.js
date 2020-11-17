import './App.css';
import React, {Component} from "react";
import MoviesApp from "./components/MoviesApp";
import HeaderDiv from "./components/header&footer/HeaderDiv";
import FooterDiv from "./components/header&footer/FooterDiv";
import LandingPage from "./components/home/LandingPage";
import store from "./store/StoreRedux";
import { Provider } from "react-redux";

class App extends Component {
render () {
  return (
   <Provider store={store}>
      <HeaderDiv/>
      <LandingPage/>
      <MoviesApp/>
      <FooterDiv/>
   </Provider>
  );
 }
}

export default App;
 