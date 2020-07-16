import React, { Component } from 'react';

class ClassProps extends Component {
   render() {
      const {img,name,age} = this.props.cho;
      return (
         <div>
            <h2>StateFull Componet</h2>
            <div className="card text-left">
               <img className="card-img-top" src= {img} alt="123"  style={{width:"300px"}}/>
               <div className="card-body">
      <h4 className="card-title">{name}</h4>
                  <p className="card-text">{age}</p>
               </div>
            </div>
         </div>
      );
   }
}

export default ClassProps;