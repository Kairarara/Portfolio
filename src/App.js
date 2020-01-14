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
        <a><i/></a>
        <a><h2>My Projects</h2></a>
        <a><h2>Contacts</h2></a>
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
        <h1>Projects</h1>
      </div>
    )
  }
}

class Project extends React.Component{
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
        <Project/>
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
        <p><i/>Mail</p>
        <p><i/>Git</p>
        <p><i/>Cell</p>
      </footer>
    )
  }
}



export default App;
