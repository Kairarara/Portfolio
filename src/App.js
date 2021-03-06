import React from 'react';
import FA from 'react-fontawesome';
import './App.css';
import {Link, animateScroll} from "react-scroll";
import projectsData from "./projectsData.json";

/*
  #ToDo fix svg background
*/

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      lang:navigator.language
    }
  }

  render(){
    return (
      <div className="App">
        <AnimatedBackground/>
        <ReactHeader lang={this.state.lang}/>
        <TitleScreen/>
        <AboutMe lang={this.state.lang}/>
        <Projects/>
        <ReactFooter lang={this.state.lang}/>
      </div>  
    )
  }
};

//-----------------------------------------------------------------------------------------------------------------------------------------------

const AnimatedBackground=(props)=>{
  
  let newSquare=(key)=>{
    let x=Math.random()*100;
    let y=Math.random()*2000-1000;
    let size=Math.random()*25+5;
    let animation=`colorChange ${Math.random()*30+15}s linear ${(Math.random()*2<1)?"normal":"reverse"} infinite running -${Math.random()*20}s,
    rotate ${Math.random()*30+15}s linear infinite running -${Math.random()*20}s`;
    let style={
      "transformOrigin": `${x}% ${y}%`,
      "animation": animation,
      "-webkit-animation": animation,
    }

    style["strokeWidth"]=`${Math.log(size)/3}`;

    if(Math.random()*5<1){
      return (
        <g style={style} key={key}>
          <rect width={size} height={size} x={x-size/2} y={y-size/2} />
          <rect width={size*3/4} height={size*3/4} x={x-size*3/8} y={y-size*3/8}/>
        </g>
      )
    } else {
      return <rect width={size} height={size} x={x-size/2} y={y-size/2} style={style} key={key}/>
    }
  }

  let squares=new Array(70);
  for(let i=0;i<squares.length;i++){
    squares[i]=newSquare(i);
  }

  return(
    <div className="AnimatedBackground">
      <svg viewBox="0 0 100 100">
        {squares}
      </svg>
    </div>
  )
}

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
      <header style={this.state}>
        <button onClick={()=>animateScroll.scrollToTop()}><FA name="home fa-4x"/></button>

        <div className="HeaderRight">
          <Link activeclass="active" to="Projects" smooth={true} duration= {500}><h2>{(this.props.lang==="it-IT")?"Progetti":"My Projects"}</h2></Link>
          <Link activeclass="active" to="AboutMe" smooth={true} duration= {500} offset={-100}><h2>{(this.props.lang==="it-IT")?"Su di me":"About me"}</h2></Link>
        </div>
      </header>
    )
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

const TitleScreen=(props)=>{
  return(
    <div className="TitleScreen">
      <h1>Pierluigi Caruso</h1>
      <h2>Web Developer</h2>
    </div>
  )
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

const AboutMe=(props)=>{
  let aboutMe;

  switch(props.lang){
    case "it-IT":{
      aboutMe=(
        <div name="AboutMe" className="AboutMe">
          <h2>Ciao, mi chiamo Pierlugi.</h2>
          <p>
          Sono un sviluppatore web junior, ho iniziato a programmare imparando C++ e da allora ho spostato la mia attenzione verso JavaScript, un linguaggio che avrebbe permesso un ingresso più agevole nel mondo della programmazione professionale.
          Ho iniziato a studiare JavaScript su <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer"><b>freeCodeCamp</b></a>, dove ho imparato di vari frameworks come jQuery, React, MongoDB e Node.
          Da allora ho continuato a studiare e a migliorare.
          </p>
        </div>
      )
      break;
    }
    default:{
      aboutMe=(
        <div name="AboutMe" className="AboutMe">
          <h2>Hi, I'm Pierlugi.</h2>
          <p>
            I'm a Junior web develpoer, I first started programming by learning C++, and I've since moved my focus to JavaScript, 
            a language that I believed would allow for a smoother entrance in the coding world.
            I've started learning JavaScript on <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer"><b>freeCodeCamp</b></a>, where I learned of varius frameworks like jQuery, React, MongoDB, and Node.
            From then, I've been continued studying on my own. 
          </p>
        </div>
      )
    }
  }

  return aboutMe
}


//-----------------------------------------------------------------------------------------------------------------------------------------------

class Projects extends React.Component{
  constructor(props){
    super(props);
    this.state={
      projectList:projectsData.list,
      filter:""
    }
  }

  modifyFilter=(e)=>{
    this.setState({
      filter:e.target.value
    });
    return;
  }

  render(){
    let projects;
    if(this.state.filter!==""){
      let filterList=this.state.filter.split(' ').map((filter)=>filter.toLowerCase()) ;

      projects=this.state.projectList.filter((project)=>{                                                               // for every project check if it contains tags listed in the fliter
        let tagList=project.tags.map((tag)=>tag.toLowerCase())                                                          // if it does map to JSX element
        for(let filter of filterList){
          
          if(filter!==""){
            let flag = false;
            for(let tag of tagList){
              if(tag.includes(filter)) {
                flag=true;
                break;
              };
            }
            if(!flag) return false;
          }

        }
        return true;
      }).map((project)=><Project key={project.name} project={project}/>);

    } else {
      projects=this.state.projectList.map((project)=><Project key={project.name} project={project}/>);
    }



    return(
      <div className="Projects" name="Projects">
        <input className="SearchBar" type="text" value={this.state.filter} onChange={this.modifyFilter} placeholder="Search tags" />
        <div className="ProjectsGrid">
          {projects}
        </div>
      </div>
    )
  }
}

const Project=(props)=>{
  let tags=props.project.tags.map((tagName)=>{
    return <Tag key={tagName} tag={tagName}/>
  })

  let renderDemo=()=>{
    if(props.project.hasOwnProperty("demo")){
      return (
        <a href={props.project.demo} target="_blank" rel="noopener noreferrer">
          <h3>Demo</h3>
        </a>
      )
    }
  }

  return(
    <div className="Project">
      <div className="InnerProject">
        <h3>{props.project.name}</h3>
        <img src={require("./project-img/"+props.project.name+".png")} alt={props.project.name}/>
        <div className="TagList">
          {tags}
        </div>

        <div className="HoverProject">
          <a href={props.project.github} target="_blank" rel="noopener noreferrer">
            <h3>GitHub</h3>
          </a>
          {renderDemo()}
        </div>
      </div>
    </div>
  )
}

const Tag=(props)=>{
  return (
    <div className={`Tag`}>
      {props.tag}
    </div>
  )
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

const ReactFooter=(props)=>{
  return(
    <footer>
      <a href="mailto:pierluigic97@gmail.com"><FA name="envelope-o fa-3x"/><h2>pierluigic97@gmail.com</h2></a>
      <a href="https://github.com/Kairarara/" target="_blank" rel="noopener noreferrer"><FA name="github fa-3x"/><h2>GitHub Profile</h2></a>
      <div><FA name="mobile fa-3x"/><h2>+39 3317847177</h2></div>
    </footer>
  )
}



export default App;
