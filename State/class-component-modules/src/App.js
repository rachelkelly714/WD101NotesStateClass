
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
         <h3> Smash that like button!</h3>
         <h4>
         <button onClick={this.incrementCount}>
           <BsHandThumbsUp />
           Likes: {this.state.incrementCount}
         </button>
         </h4>

         <h3> Or...hit that dislike :( </h3>
         <h4>
         <button onClick={this.decrementCount}>
           <BsHandThumbsDown />
           Dislikes: {this.state.decrementCount}
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
</div>

);

};