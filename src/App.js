import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



function TopBar(props){
  return(
    <div class="TopBar">
      <h1>Matthew Carrasco</h1>
      <h2>User Researcher, Designer, Front-End Developer</h2>
    </div>
  );
}
function LeftPanel(props){
  return (
    <div class="LeftPanel">
      <TableOfContents />
    </div>

  );
}
function TableOfContents(props){
  return (
    <div class="TableOfContents">
      <Portfolio />
      <TableOfContentsLink name="RESUME" />
      <TableOfContentsLink name="GITHUB" />
      <TableOfContentsLink name="INSPIRATION" />
      <TableOfContentsLink name="CONTACT ME" />

    </div>
  );
}
function Portfolio(props){
  return (
    <div class="Portfolio">
      <span class="PortfolioHeader">PORTFOLIO</span>
      <PortfolioSection name="RESEARCH PROJECTS" type="research" />
      <PortfolioSection name="COURSE/PERSONAL PROJECTS" type="other" />
    </div>
  );
}

function PortfolioLink(props){
  return (
    <span class="PortfolioLink">
      {props.value}
    </span>
  );
}
function TableOfContentsLink(props){
  return (
    <span class="PortfolioLink">
      {props.name}
    </span>
  );
}

function PortfolioSection(props){
  
  const links = ["link one", "link two", "link three"];
  const listOfLinks = links.map((link) => <PortfolioLink key={link} value={link} />);

  return (
    <div class="PortfolioSection">
      <span class="PortfolioSectionHeader">{props.name}</span>
      {listOfLinks}
    </div>
  );
}


// function ContentContainer(props){
//   return (

//   );
// }
// function SingleItemScrollable(props){
//   return (

//   );
// }
// function MultipleItemScrollable(props){
//   return (

//   );
// }
// function SingleItem(props){
//   return (

//   );
// }
// function LargeImage(props){
//   return (

//   );
// }
// function Label(props){
//   return (

//   );
// }
// function Caption(props){
//   return (

//   );
// }
// function MultipleItem(props){
//   return (

//   );
// }
// function SmallImage(props){
//   return (

//   );
// }

class App extends Component {
  render() {
    return (
        <div>
         <TopBar />

        <LeftPanel />
        </div>
    );
  }
}

export default App;
