import React from 'react';
import './classComponent.css'
class ClassComponent extends React.Component {
  handleClick = () =>{    
    const classComponentContent = document.getElementById("classComponentContent");
    classComponentContent.style.display = classComponentContent.style.display === 'block' ? 'none' : 'block';      
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
