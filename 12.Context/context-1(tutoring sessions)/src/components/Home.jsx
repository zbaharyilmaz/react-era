import React from "react";
import OgrenciList from "./OgrenciList";

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily:"Caveat"}}>LEADER TEACHERS ROOM </h1>
     <h3 style={{ textAlign: "center", fontFamily:"Caveat"}}>TUTORING SESSIONS</h3>
      <OgrenciList />
    </div>
  );
};

export default Home;
