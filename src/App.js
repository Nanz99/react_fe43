import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import Eventbinding from './EventBinding/Eventbinding';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
import ExambleGlasses from './RenderWithState/ExambleGlasses';
import DemoProps from './Props/DemoProps';



function App() {
    return (
        <div className="App">
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
            {/* <Header /> */}
            {/* <BaiTapLayout /> */}
            {/* <BaiTapLayout2 /> */}
            {/* <DataBinding /> */}
            {/* <Eventbinding /> */}
            {/* <RenderWithState/> */}
            {/* <BaiTapChonXe/> */}
            <ExambleGlasses/>
            {/* <DemoProps/> */}
        </div>
    );
}

export default App;
