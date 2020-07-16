import React, { Component } from 'react';

class Eventbinding extends Component {
   handleClick = () => {
      alert("Hello");
   }
   showMessage = (name) => {
      alert("hello " + name);
   }
   render() {
      return (
         
         <div>
            {/* <button onClick={this.handleClick}>Click Me</button> */}
            {/* Cach 2 dung arrow funtion */}
            <button onClick={()=>{this.handleClick();}}>Click</button>
            <button className="btn btn-danger" onClick={() => {
               this.showMessage("Cybersoft");
            }}>Show Info</button>
            <button className="btn btn-warning">Warn</button>
         </div>
      );
   }
}
export default Eventbinding;