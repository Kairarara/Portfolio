(this.webpackJsonpPortfolio=this.webpackJsonpPortfolio||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"list":[{"demo":"https://kairarara.github.io/SimonSays/","github":"https://github.com/Kairarara/SimonSays","name":"Simon Says","tags":["React","FrontEnd"]},{"demo":"https://kairarara.github.io/DungeonCrawler/","github":"https://github.com/Kairarara/DungeonCrawler","name":"Dungeon Crawler","tags":["React","Redux","FrontEnd"]},{"demo":"https://kairarara.github.io/RecipeBox/","github":"https://github.com/Kairarara/RecipeBox","name":"Recipe Box","tags":["React","FrontEnd"]},{"demo":"https://kairarara.github.io/TicTacToe/","github":"https://github.com/Kairarara/TicTacToe","name":"TicTacToe","tags":["jQuery","FrontEnd"]},{"demo":"https://kairarara.github.io/WeatherApp/","github":"https://github.com/Kairarara/WeatherApp","name":"Weather App","tags":["jQuery","FrontEnd"]}]}')},21:function(e,t,a){e.exports=a(44)},26:function(e,t,a){},29:function(e,t,a){},38:function(e,t,a){var n={"./Dungeon Crawler.png":39,"./Recipe Box.png":40,"./Simon Says.png":41,"./TicTacToe.png":42,"./Weather App.png":43};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=38},39:function(e,t,a){e.exports=a.p+"static/media/Dungeon Crawler.dcd7a301.png"},40:function(e,t,a){e.exports=a.p+"static/media/Recipe Box.4d011808.png"},41:function(e,t,a){e.exports=a.p+"static/media/Simon Says.55a274fd.png"},42:function(e,t,a){e.exports=a.p+"static/media/TicTacToe.261c0d4d.png"},43:function(e,t,a){e.exports=a.p+"static/media/Weather App.5946d4aa.png"},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),c=(a(26),a(1)),l=a(2),s=a(4),u=a(3),m=a(5),h=a(7),p=a.n(h),d=(a(29),a(11)),f=a(20),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={lang:navigator.language},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(v,{lang:this.state.lang}),r.a.createElement(E,null),r.a.createElement(j,{lang:this.state.lang}),r.a.createElement(y,null),r.a.createElement(k,{lang:this.state.lang}))}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).newSquare=function(e){var t=100*Math.random(),a=100*Math.random(),n=25*Math.random()+5,o={animation:"rotate,colorChange",transformOrigin:"".concat(t,"% ").concat(a,"%"),animationDuration:"".concat(30*Math.random()+15,"s"),animationTimingFunction:"linear",animationDirection:2*Math.random()<1?"normal":"reverse",animationIterationCount:"infinite",animationPlayState:"running",animationDelay:"-".concat(20*Math.random(),"s")};return o.strokeWidth="".concat(Math.log(n)/3),5*Math.random()<1?r.a.createElement("g",{style:o,key:e},r.a.createElement("rect",{width:n,height:n,x:t-n/2,y:a-n/2}),r.a.createElement("rect",{width:3*n/4,height:3*n/4,x:t-3*n/8,y:a-3*n/8})):r.a.createElement("rect",{width:n,height:n,x:t-n/2,y:a-n/2,style:o,key:e})},a.state={h:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.divElement.clientHeight;this.setState({h:e})}},{key:"render",value:function(){for(var e=this,t=new Array(Math.floor(this.state.h/300)),a=0;a<t.length;a++)t[a]=this.newSquare(a);return r.a.createElement("div",{className:"AnimatedBackground",ref:function(t){e.divElement=t}},r.a.createElement("svg",{viewBox:"0 0 100 100"},t))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){window.addEventListener("scroll",a.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",a.handleScroll)},a.handleScroll=function(e){0===window.scrollY?a.setState({background:"transparent"}):a.setState({background:"#2c2c2c"})},a.state={background:"transparent"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{style:this.state},r.a.createElement("a",{onClick:function(){return d.animateScroll.scrollToTop()}},r.a.createElement(p.a,{name:"home fa-4x"})),r.a.createElement("div",{className:"HeaderRight"},r.a.createElement(d.Link,{activeclass:"active",to:"Projects",smooth:!0,duration:500},r.a.createElement("h2",null,this.props.lang?"Progetti":"My Projects")),r.a.createElement(d.Link,{activeclass:"active",to:"AboutMe",smooth:!0,duration:500,offset:-100},r.a.createElement("h2",null,this.props.lang?"Su di me":"About me"))))}}]),t}(r.a.Component),E=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"TitleScreen"},r.a.createElement("h1",null,"Pierluigi Caruso"),r.a.createElement("h2",null,"Front-end web developer"))}}]),t}(r.a.Component),j=function(e){var t;switch(e.lang){case"it-IT":t=r.a.createElement("div",{name:"AboutMe",className:"AboutMe"},r.a.createElement("h2",null,"Ciao, mi chiamo Pierlugi."),r.a.createElement("p",null,"Studio la programmazione come hobby da 2 anni, ho iniziato imparando C++ e da allora ho spostato la mia attenzione verso JavaScript, un linguaggio che credevo avrebbe permesso un ingresso pi\xf9 agevole nel mondo della programmazione professionale. Ho iniziato a studiare JavaScript su ",r.a.createElement("a",{href:"https://www.freecodecamp.org/",target:"_blank"},r.a.createElement("b",null,"freeCodeCamp")),", dove ho completato il corso, e da allora ho continuato a imparare."));break;case"en-UK":case"en-US":default:t=r.a.createElement("div",{name:"AboutMe",className:"AboutMe"},r.a.createElement("h2",null,"Hi, I'm Pierlugi."),r.a.createElement("p",null,"I've been studying coding as a hobby for 2 years, I startded by learning how to write in C++, and I've since moved my focus to JavaScript, a language that I believed would allow for a smoother entrance in the coding world. I've started learning JavaScript on ",r.a.createElement("a",{href:"https://www.freecodecamp.org/",target:"_blank"},r.a.createElement("b",null,"freeCodeCamp")),", where I completed the full course, and i've been since learning on my own."))}return t},y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).modifyFilter=function(e){a.setState({filter:e.target.value})},a.state={projectList:f.list,filter:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;if(""!==this.state.filter){var t=this.state.filter.split(" ").map((function(e){return e.toLowerCase()}));e=this.state.projectList.filter((function(e){var a=e.tags.map((function(e){return e.toLowerCase()})),n=!0,r=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var l=i.value;if(""!==l){var s=!1,u=!0,m=!1,h=void 0;try{for(var p,d=a[Symbol.iterator]();!(u=(p=d.next()).done);u=!0){if(p.value.includes(l)){s=!0;break}}}catch(f){m=!0,h=f}finally{try{u||null==d.return||d.return()}finally{if(m)throw h}}if(!s)return!1}}}catch(f){r=!0,o=f}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return!0})).map((function(e){return r.a.createElement(O,{key:e.name,project:e})}))}else e=this.state.projectList.map((function(e){return r.a.createElement(O,{key:e.name,project:e})}));return r.a.createElement("div",{className:"Projects",name:"Projects"},r.a.createElement("input",{className:"SearchBar",type:"text",value:this.state.filter,onChange:this.modifyFilter,placeholder:"Search tags"}),r.a.createElement("div",{className:"ProjectsGrid"},e))}}]),t}(r.a.Component),O=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.project.tags.map((function(e){return r.a.createElement(w,{key:e,tag:e})}));return r.a.createElement("div",{className:"Project"},r.a.createElement("div",{className:"InnerProject"},r.a.createElement("h3",null,this.props.project.name),r.a.createElement("img",{src:a(38)("./"+this.props.project.name+".png")}),r.a.createElement("div",{className:"TagList"},e),r.a.createElement("div",{className:"HoverProject"},r.a.createElement("a",{href:this.props.project.github,target:"_blank"},r.a.createElement("h3",null,"GitHub")),r.a.createElement("a",{href:this.props.project.demo,target:"_blank"},r.a.createElement("h3",null,"Demo")))))}}]),t}(r.a.Component),w=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Tag ".concat(this.props.tag)},this.props.tag)}}]),t}(r.a.Component),k=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("a",{href:"mailto:mailexample"},r.a.createElement(p.a,{name:"envelope-o fa-3x"}),r.a.createElement("h2",null,"mailexample")),r.a.createElement("a",{href:"https://github.com/",target:"_blank"},r.a.createElement(p.a,{name:"github fa-3x"}),r.a.createElement("h2",null,"GitHub Profile")),r.a.createElement("div",null,r.a.createElement(p.a,{name:"mobile fa-3x"}),r.a.createElement("h2",null,"3333333333")))}}]),t}(r.a.Component),S=g;i.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b4d70190.chunk.js.map