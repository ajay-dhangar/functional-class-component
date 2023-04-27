import React from 'react'
import './functionComponent.css'
function FunctionComponent() {
    // const handlerClick= document.getElementBy("functionalComponentBtn");
    // handlerClick.addEventListener('click', ()=>{
    //     let count = 1;
    //     if(count%2!==0){
    //       document.getElementById("functionalComponentBtn").style.display="block";
    //       count++;
    //     }
    //     else{
    //       document.getElementById("functionalComponentBtn").style.display="none"
    //       count++;
    //     }
    // })
    
    
  return (
    <div>
        <button id='functionalComponentBtn'>To see styling in functional component</button>
       <div id='functionComponentContent'>
           <h2>This is Created Using Functional component</h2>
           <p>This is done using external CSS</p>
           <p style={{color:'blue'}}>This is done using inline CSS</p>
       </div>
    </div>
  )
}

export default FunctionComponent
