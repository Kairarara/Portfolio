import React from 'react';
import './App.css';

const App=()=>(
  <div className="App">
    <Header/>
    <TitleScreen/>
    <Projects/>
    <Footer/>
  </div>
);

class LanguagePicker extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        
      </div>
    )
  }
}

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <header>
        <a><i/>></a>
        <a><p>My Projects</p></a>
        <a></a>
        <LanguagePicker/>
      </header>
    )
  }
}

class TitleScreen extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}

class Projects extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}

class Footer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <footer>

      </footer>
    )
  }
}



export default App;
