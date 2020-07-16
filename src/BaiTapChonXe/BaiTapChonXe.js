import React, { Component } from 'react';

class BaiTapChonXe extends Component {
   state = {
      srcImg : "./img/products/black-car.jpg",
   }
   changeColor = (color) =>{
      let imgColor = `./img/products/${color}-car.jpg`;
      this.setState({
         srcImg:imgColor
      })
   }
   render() {
      return (
         <div>
            <div className="container-fluid">
               <div className="row mt-5">
                  <div className="col-6">
                     <img src={this.state.srcImg} alt="123" className="w-100" />
                  </div>
                  <div className="col-6">
                     <div className="row">
                        <div className="col-3">
                           <button className="btn btn-danger" onClick={() => {
                              this.changeColor("red");
                           }}>Red Color</button>
                        </div>
                        <div className="col-3">
                           <button className="btn btn-secondary" onClick={() => {
                              this.changeColor("silver");
                           }}>Silver Color</button>
                        </div>
                        <div className="col-3">
                           <button style={{ backgroundColor: "black" }} className="text-white p-2" onClick={() => {
                               this.changeColor("black");
                           }}>Black Color</button>
                        </div>
                        <div className="col-3">
                           <button style={{ backgroundColor: "gray" }} className="text-white p-2" onClick={() => {
                               this.changeColor("steel");
                           }}>Steel Color</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default BaiTapChonXe;