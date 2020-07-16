import React, { Component } from 'react';
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

class DemoProps extends Component {
   render() {
      const dog = {
         img:"https://image.nghenhinvietnam.vn/Uploaded/trunghieu/2020_07_02/iron_man_action_armor_wallpaper_2880x1620_41717_52_CHQF.jpg",
         name : "SVGFEColorMatrixElement",
         age: 18,
      }
      const cat = {
         srcImg:"https://i.ytimg.com/vi/XP5xONcrDg4/maxresdefault.jpg",
         name: "tam the",
         age: 17
      }
      return (
         <div>
            <ClassProps cho={dog}/>
            <FunctionProps meo ={cat}/>
         </div>
      );
   }
}

export default DemoProps;