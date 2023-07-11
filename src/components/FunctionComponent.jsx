import React from 'react'
import './functionComponent.css'
function FunctionComponent() {
  function handleClick() {
    const functionComponentContent = document.getElementById("functionComponentContent");
    functionComponentContent.style.display = functionComponentContent.style.display === 'block' ? 'none' : 'block';  
  }
  
  return (
    <div>
        <button id='functionalComponentBtn' onClick={handleClick}>To see styling in functional component</button>
       <div id='functionComponentContent'>
           <h2>This is Created Using Functional component</h2>
           <p>This is done using external CSS</p>
           <p style={{color:'blue'}}>This is done using inline CSS</p>
       </div>
    </div>
  )
}

export default FunctionComponent
