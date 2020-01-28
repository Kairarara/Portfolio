import React from 'react';
import FA from 'react-fontawesome';
import './App.css';
import {Link, animateScroll} from "react-scroll";


const App=()=>(
  <div className="App">
    <AnimatedBackground/>
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
      background: "transparent"
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
    } else {
        this.setState({background: "#2c2c2c"});
    }
  }

  render(){
    
    return(
      <header className="ReactHeader" style={this.state}>
        <a onClick={()=>animateScroll.scrollToTop()}><FA name="home fa-4x"/></a>

        <div className="HeaderRight">
          <Link activeClass="active" to="Projects" smooth={true} duration= {500}><h2>My Projects</h2></Link>
          <Link activeClass="active" to="ReactFooter" smooth={true} duration= {500}><h2>Contacts</h2></Link>
          <LanguagePicker/>
        </div>
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

class AnimatedBackground extends React.Component{
  constructor(props){
    super(props);
  }

  
  newSquare=()=>{
    let x=Math.random()*200-50;
    let y=Math.random()*100;
    let width=Math.random()*40+10;
    let height=width;
    let style={
      "animation": "rotate,colorChange",
      "transform-origin": ""+x+"% "+y+"%",
      "animation-duration": (Math.random()*25+5)+"s",
      "animation-timing-function": "linear",
      "animation-direction": (Math.random()*2<1)?"normal":"reverse",
      "animation-iteration-count": "infinite",
      "animation-play-state": "running;",
      "animation-delay": "-"+(Math.random()*20)+"s"
    }

    if(Math.random()*5<1){
      return (
        <g style={style}>
          <rect width={width} height={height} x={x-width/2} y={y-height/2} />
          <rect width={width*3/4} height={height*3/4} x={x-width*3/8} y={y-height*3/8}/>
        </g>
      )
    } else {
      return <rect width={width} height={height} x={x-width/2} y={y-height/2} style={style}/>
    }

    
  }

  render(){
    return(
      <svg viewBox="0 0 100 100" className="AnimatedBackground">
        {this.newSquare()}
        {this.newSquare()}
        {this.newSquare()}
        {this.newSquare()}
        {this.newSquare()}
        {this.newSquare()}
        {this.newSquare()}
        {this.newSquare()}
        {this.newSquare()}
        {this.newSquare()}
        {this.newSquare()}
        {this.newSquare()}
        {this.newSquare()}
        {this.newSquare()}
        {this.newSquare()}
      </svg>
    )
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

class Projects extends React.Component{
  constructor(props){
    super(props);
    this.state={
      projectList:[{
        link:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1024px-NYCS-bull-trans-1.svg.png",
        name:"1"
      },{
        link:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/1024px-NYCS-bull-trans-2.svg.png",
        name:"2"
      }]
    }
  }

  render(){

    let projects=this.state.projectList.map((project)=><Project key={project.name} name={project.name} link={project.link}/>);
    return(
      <div className="Projects" name="Projects">
        {projects}
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
        <a href={this.props.link} target="_blank">
          <img src={require("./project-img/"+this.props.name+".png")}/>
        </a>
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
      <footer className="ReactFooter" name="ReactFooter">
        <a href="mailto:mailexample"><FA name="envelope-o fa-3x"/><h2>mailexample</h2></a>
        <a href="https://github.com/" target="_blank"><FA name="github fa-3x"/><h2>GitHub Profile</h2></a>
        <div><FA name="mobile fa-3x"/><h2>3333333333</h2></div>
      </footer>
    )
  }
}



export default App;
