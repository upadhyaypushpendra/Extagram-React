import React from 'react';
import Login from "./components/Login/Login";
import ImageAnimation from "./components/ImageAnimation/ImageAnimation";
import Footer from "./components/Footer/Footer";
import './app.css';
function App() {
  return (
      <>
        <div className="main">
          <div className="left">
            <ImageAnimation />
          </div>
          <div className="right">
            <Login />
          </div>
        </div>
        <Footer fontSize="14px"/>
      </>
  );
}
export default App;