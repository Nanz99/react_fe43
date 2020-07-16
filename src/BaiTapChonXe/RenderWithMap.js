import React, { Component } from 'react';

class RenderWithMap extends Component {
   productList = [
      {id: 1, name : "i phone X", price: "15000000"},
      {id: 1, name : "i phone 11", price: "20000000"},
      {id: 1, name : "i phone 12", price: "35000000"},
   ]
   renderProductList = () =>{
      let arrProductList = [],
      for(let i= 0; i<this.productList.length;i++){
         let product = this.productList[i];
         let trProduct = <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td><button className="btn btn-danger">Xoa</button></td>
         </tr>
      }
   }
   render() {
      return (
         <div className="container">
            <h3>Product List</h3>
            <table className="table">
               <thead>
                  <tr>
                     <th>id</th>
                     <th>name</th>
                     <th>price</th>
                  </tr>
               </thead>
            </table>
         </div>
      );
   }
}

export default RenderWithMap;
