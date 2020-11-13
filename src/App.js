import './App.css';
import React, {Component} from "react";
import MoviesApp from "./components/MoviesApp"
import HeaderDiv from "./components/header&footer/HeaderDiv"
import FooterDiv from "./components/header&footer/FooterDiv"


class App extends Component {
render () {
  return (
   <div>
      <HeaderDiv/>
      <MoviesApp/>
      <FooterDiv/>
   </div>
  );
 }
}

export default App;
 