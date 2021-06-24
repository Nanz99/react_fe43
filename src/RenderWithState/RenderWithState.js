import React, { Component } from 'react';

class RenderWithState extends Component {

   //this.state : thuoc tinh chua nhung gia tri thay doi khi nguoi dung thao tac tren giao dien. Day la thuoc tinh co san cua componet
   isLogin = true;
   userName = "Nhut";
   renderContent = () => {
      if (this.state.isLogin) {
         return <p>hello {this.userName}</p>
      }
      return <button onClick={() => {
         this.isLogin();
      }}></button>
   }
   isLogin = () => {
      // this.isLogin = true;
      // console.log(this.isLogin);
      // this.render();
      let newState = {
         isLogin : true
      }
      this.setState(newState)
   }
   render() {
      return (
         <div>
            {this.renderContent()}
         </div>
      );
   }
}
export default RenderWithState;