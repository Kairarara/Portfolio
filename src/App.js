import React from 'react';
import FA from 'react-fontawesome';
import './App.css';
import {Link, animateScroll} from "react-scroll";

/*
  #ToDo fix svg background
*/

const App=()=>(
  <div className="App">
    <AnimatedBackground/>
    <ReactHeader/>
    <TitleScreen/>
    <AboutMe/>
    <Projects/>
    <ReactFooter/>
  </div>  
);

//-----------------------------------------------------------------------------------------------------------------------------------------------


class AnimatedBackground extends React.Component{
  constructor(props){
    super(props);
    this.state={
      h:0
    }
  }

  componentDidMount(){

    const height = this.divElement.clientHeight;
    this.setState({ h:height });
  }
  
  newSquare=()=>{
    let x=Math.random()*100;
    let y=Math.random()*100;
    let size=Math.random()*25+5;
    let style={
      "animation": "rotate,colorChange",
      "transform-origin": `${x}% ${y}%`,
      "animation-duration": `${Math.random()*30+15}s`,
      "animation-timing-function": "linear",
      "animation-direction": (Math.random()*2<1)?"normal":"reverse",
      "animation-iteration-count": "infinite",
      "animation-play-state": "running;",
      "animation-delay": `-${Math.random()*20}s`
    }

    style["stroke-width"]=`${Math.log(size)/3}`;

    if(Math.random()*5<1){
      return (
        <g style={style}>
          <rect width={size} height={size} x={x-size/2} y={y-size/2} />
          <rect width={size*3/4} height={size*3/4} x={x-size*3/8} y={y-size*3/8}/>
        </g>
      )
    } else {
      return <rect width={size} height={size} x={x-size/2} y={y-size/2} style={style}/>
    }
  }

  render(){
    let squares=new Array(Math.floor(this.state.h/300));
    for(let i=0;i<squares.length;i++){
      squares[i]=this.newSquare();
    }

    return(
      <div className="AnimatedBackground" ref={ (divElement) => { this.divElement = divElement } }>
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {squares}
        </svg>
      </div>
    )
  }
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
        <a onClick={()=>animateScroll.scrollToTop()}><FA name="home fa-4x"/></a>

        <div className="HeaderRight">
          <Link activeClass="active" to="Projects" smooth={true} duration= {500}><h2>My Projects</h2></Link>
          <Link activeClass="active" to="AboutMe" smooth={true} duration= {500} offset={-100}><h2>About me</h2></Link>
        </div>
      </header>
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
        <h2>Front-end web developer</h2>
      </div>
    )
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

const AboutMe=()=>{
  return(
    <div name="AboutMe" className="AboutMe">
      <h2>Hi, I'm Pierlugi</h2>
      <p>
        I've been studying coding as a hobby for 2 years, I startded by learning how to write in C++, and I've since moved my focus to JavaScript, 
        a language that I believed would allow for a smoother entrance in the coding world.
        I've started learning JavaScript on <a><b>freeCodeCamp</b></a>, where I completed the full course, and i've been since learning on my own. 
      </p>
    </div>
  )
}


//-----------------------------------------------------------------------------------------------------------------------------------------------

class Projects extends React.Component{
  constructor(props){
    super(props);
    this.state={
      projectList:[{
        demo:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1024px-NYCS-bull-trans-1.svg.png",
        github:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1024px-NYCS-bull-trans-1.svg.png",
        name:"Simon Says",
        tags:["React","FrontEnd"]
      },{
        demo:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/1024px-NYCS-bull-trans-2.svg.png",
        github:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/1024px-NYCS-bull-trans-2.svg.png",
        name:"2",
        tags:["2"]
      }],
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

class Project extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let tags=this.props.project.tags.map((tagName)=>{
      return <Tag key={tagName} tag={tagName}/>
    })

    return(
      <div className="Project">
        <div className="InnerProject">
          <h3>{this.props.project.name}</h3>
          <img src={require("./project-img/"+this.props.project.name+".png")}/>
          <div className="TagList">
            {tags}
          </div>

          <div className="HoverProject">
            <a href={this.props.project.github} target="_blank">
              <h3>GitHub</h3>
            </a>
            <a href={this.props.project.demo} target="_blank">
              <h3>Demo</h3>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

class Tag extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div activeClass="active" to="Projects" smooth={true} duration= {500} className={`Tag ${this.props.tag}`}>
        {this.props.tag}
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
      <footer>
        <a href="mailto:mailexample"><FA name="envelope-o fa-3x"/><h2>mailexample</h2></a>
        <a href="https://github.com/" target="_blank"><FA name="github fa-3x"/><h2>GitHub Profile</h2></a>
        <div><FA name="mobile fa-3x"/><h2>3333333333</h2></div>
      </footer>
    )
  }
}



export default App;
