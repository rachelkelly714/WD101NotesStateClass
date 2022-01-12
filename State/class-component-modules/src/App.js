
import './App.css';
import React, {Component} from 'react'; 
import {BsHandThumbsUp, BsHandThumbsDown} from 'react-icons/bs';


export default class ClassComponentDemo extends Component {
  constructor(props) {
      super(props);
      this.state = { incrementCount: 0, decrementCount: 0};  
    
  }

  incrementCount = () => {
    this.setState(
        { incrementCount: this.state.incrementCount + 1}

    );

  
  };

  decrementCount = () => {
    this.setState(
      {decrementCount: this.state.decrementCount - 1}
    );
  };

  render(){
      return (
          <div className="main">
          <div className="mainDiv">
         <ClassComponentNotes />
         <hr />
         <h2>Challenges</h2>
         <h3> Smash that like button!</h3>
         <h4>
         <button onClick={this.incrementCount}>
           <BsHandThumbsUp />
           {this.state.incrementCount}
         </button>
         </h4>

         <h3> Or...hit that dislike :( </h3>
         <h4>
         <button onClick={this.decrementCount}>
           <BsHandThumbsDown />
           
           
        {this.state.decrementCount}
         </button>
         </h4>



          </div>



          </div>
      );
  }

}

const ClassComponentNotes = function () {
return (
<div>
<h1>Class Components</h1> 

<p>Class components are considered the "React way" of writing components. </p>
<dl>  
    <dt>ES6 JS Classes</dt>
    <dd>Built on these, must understand them</dd>
    <dt>Must extend Component</dt>
    <dd>Class components need to extend to the React Component.</dd>
    <dt>render()</dt>
    <dd>Class components must always have a render method.</dd>
    <dt>export</dt>
    <dd>Only one class component exported per file.</dd>
</dl>
<hr />

<h1>Recap</h1>
<p>Class components have a little more complexity than Functional Components. Let's stay with our pattern and make a little list of notes here.</p>
<ul>
<li>Must Extend React.Component</li>
<li>Must always have a render method</li>
<li>Will often have a constructor</li>
<li>Class components are considered the "React way" of writing components</li>
<li>Known as intelligent components</li>
<li>Built with ES6 JS Classes</li>
<li>Have lifecycle hooks/methods, different phases in the lifecycle of the component where different events can/should happen</li>
<li>Use export, like Functional Components</li>
<li>Multiple class components can be in one file, but only one class component should be exported for each file.</li>

</ul>

<p>These are a few rules that we'll study in the upcoming modules. </p>

<hr />

<h1>Props Overview</h1>
<p>Here are a few important things to know about props:</p>
<ul>
  <li>not the same as state</li>
  <li>are received from above from a 'parent' component</li>
  <li>are immutable (unable to be changed)</li>
  <li>are properties, a way to configure a component</li>
  <li>can think of them like parameters to a function</li>
</ul>
<p>These are just some starter rules to be aware of. Let's get started with messing around with props.</p>



</div>



);

};