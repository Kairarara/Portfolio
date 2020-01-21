import React from 'react';
import FA from 'react-fontawesome';
import './App.css';


const App=()=>(
  <div className="App">
    <ReactHeader/>
    <TitleScreen/>
    <Projects/>
    <ReactFooter/>
  </div>
);

//-----------------------------------------------------------------------------------------------------------------------------------------------

class ReactHeader extends React.Component{
  constructor(props){
    super(props);
    this.state={
      "background": "transparent",
      "transition": "background 1s ease-in", // Safari
      "-webkit-transition": "background 1s ease-in"
    }
  }

  componentDidMount=()=> {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount=()=> {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll=(event)=> {
    if (window.scrollY === 0 ) {
        this.setState({background: "transparent"});
    }
    else {
        this.setState({background: "blue"});
    }
  }

  render(){
    
    return(
      <header className="ReactHeader" style={this.state}>
        <a><i/></a>
        <a><h2>My Projects</h2></a>
        <a><h2>Contacts</h2></a>
        <LanguagePicker/>
      </header>
    )
  }
}

class LanguagePicker extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <a><img src={require("./flag-icons/it.png")} alt="Italian Flag"/></a>
        <a><img src={require("./flag-icons/uk.png")} alt="United Kingdom Flag"/></a>
      </div>
    )
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

class TitleScreen extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="TitleScreen">
        <h1>Pierluigi Caruso</h1>
      </div>
    )
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

class Projects extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="Projects">
        <Project/>
        <Project/>
        <Project/>
        <Project/>
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
      <div className="Project">
        <h2>Project</h2>
      </div>
    )
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

class ReactFooter extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <footer className="ReactFooter">
        <a><div><h2><FA name="envelope-o"/>Mail</h2></div></a>
        <a><div><h2><FA name="github"/>Git</h2></div></a>
        <a><div><h2><FA name="mobile"/>Cell</h2></div></a>
      </footer>
    )
  }
}



export default App;
