import React from 'react';
import './classComponent.css'
class ClassComponent extends React.Component {
  handleClick = () =>{
    
      document.getElementById("classComponentContent").style.display="block";
      
  }
  render() {
    return (
      <div>
        <button id='classComponentBtn' onClick={this.handleClick}>To see styling in Class component</button>
        <div id='classComponentContent'><h2>This is Created Using Functional component</h2>
           <p>This is done using external CSS</p>
           <p style={{color:'blue'}}>This is done using inline CSS</p>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
