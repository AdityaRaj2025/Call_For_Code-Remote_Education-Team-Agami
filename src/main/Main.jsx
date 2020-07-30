//import React from "react";
import web from "../src/images/27827.png";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";
import React, { useState } from 'react';
import Simpleform from './Simpleform';

const Main = () => {

  let [showChat, setShowChat] = useState(false);
  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }

  return (
    <>
      <Commom
        name="THE REAL SMELL OF CONNECT"
        imgsrc={web}
        visit="https://adityarajportfolio.netlify.app/"
        btname="Join a Class"
      />
      
     {/* <a href ="https://adityarajportfolio.netlify.app/">
              <button>Open</button>
      </a>*/}
       <div className = "bot">
        <div style ={{display: showChat ? "" : "none"}}>
          <Simpleform></Simpleform>
        </div>      
        { /*<div> {showChat ? <Simpleform></Simpleform> : null} </div> */}
        <div>
          {!showChat 
            ? <button className="btn" onClick={() => startChat()}>Agami Assistant</button> 
            : <button className="btn" onClick={() => hideChat()}>Close </button>}
        </div>
      </div>   

    </>
  );
};

export default Main;
