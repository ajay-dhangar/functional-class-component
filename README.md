# Getting Started with Create React App for Functional and Class components 

[![pages-build-deployment](https://github.com/Ajay-Dhangar/functional-class-component/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Ajay-Dhangar/functional-class-component/actions/workflows/pages/pages-build-deployment)

## Demo (Click on Image for view project)

<a href="https://ajay-dhangar.github.io/functional-class-component/"><img src="https://user-images.githubusercontent.com/99037494/235401143-5aeead61-3ae3-42c2-a982-34c98a81b61f.png" alt="dfunctional and class component" width="80%" /></a>


## Now, How To make it?

### **Step 1:** Set up your development environment

To get started, you'll need to set up your development environment. 
This includes installing Node.js, a package manager like npm or Yarn, and a code editor like Visual Studio Code.

### Step 2: Create a new React project

Once you have your development environment set up, you can create a new React project using the create-react-app command. Open up your terminal or command prompt and run the following command:

```arduino
npx create-react-app functional-class-component
```

This will create a new React project with the name "functional-class-component" in your current directory.

### Step 3: Install dependencies

Now that you have a new React project, you'll need to install the necessary dependencies for your app. Navigate to the project directory and run the following command:

```pwsh
npm install axios react-router-dom
```

This will install Axios and React Router Dom, which are the two dependencies your app will use.

### Step 4: Create your components

With your dependencies installed, you can start creating your components. In this app, you'll create two components: a functional component and a class component.

1. First, create a new file called `FunctionalComponent.jsx`, `functionalComponent.css` in the `src` directory. Next, create a new file called `ClassComponent.jsx`, `classComponent.css` in the "src" directory.

![image](https://user-images.githubusercontent.com/99037494/235404113-b3a390ae-8aba-4191-a1e5-7453ab17fd95.png)


2. This will be your functional component. In the file, add the following code:

For `FunctionalComponent.jsx`:

```js
import React from 'react'
import './functionComponent.css'
function FunctionComponent() {
  function handleClick() {
    const functionComponentContent = document.getElementById("functionComponentContent");
    functionComponentContent.style.display = functionComponentContent.style.display === 'none' ? 'block' : 'none';  
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
```

For `functionalComponent.css`:

```css
#functionalComponentBtn{
    border-radius: 30px;
    width: auto;    
    padding: 20px;
    font-size: 16px;
    margin-top: 50px;
}
#functionComponentContent{
    margin-top: 120px;
    border: 3px solid #000;
    padding: 30px;
    border-radius: 30px;
    background-color: aqua;
    display: none;
 }
```

3. Next This will be your class component. In the file, add the following code:

For `ClassComponent.jsx` :

```js
import React from 'react';
import './classComponent.css'
class ClassComponent extends React.Component {
  handleClick = () =>{    
    const classComponentContent = document.getElementById("classComponentContent");
    classComponentContent.style.display = classComponentContent.style.display === 'none' ? 'block' : 'none';      
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
```

For `classComponent.css` :

```css
#classComponentBtn{
    margin-top: 50px;
    border-radius: 30px;
    width: auto;
    font-size: 16px;
    padding: 20px;
}
#classComponentContent{
   margin-top: 120px;
   border: 3px solid #000;
   padding: 30px;
   border-radius: 30px;
   background: rgb(55,177,179);
background: linear-gradient(0deg, rgba(55,177,179,1) 1%, rgba(209,191,191,1) 7%, rgba(198,71,104,0.9472163865546218) 52%, rgb(241, 80, 112) 85%);
   display: none;
}
```

4. Now, you write code in `index.js` file of `component`

```js
export { default as ClassComponent} from "./ClassComponent"
export { default as FunctionComponent} from "./FunctionComponent"
```

### Step 5: Now, update `App.js` file

```js
import React from 'react';
import './App.css'
import {FunctionComponent, ClassComponent}  from "./components";

function App() {
  return (
    <div className="App">
      <h1>Styling using Functional and Class components</h1>
      <div className='btns'>
        <FunctionComponent name="John"/>
        <ClassComponent />        
        </div>
    </div>
  );
}

export default App;
```

### Step 6: Write a command for start your React App

```pwsh
npm start
```

Open http://localhost:3000 to view it in your browser.
