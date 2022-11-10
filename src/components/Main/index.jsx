import React from "react";
import CompletedMatches from "../CompletedMatches";
import CurrentMatch from "../CurrentMatch";
import "./styles.css";

const Main = () => {
  
  return (
    <main className='Main'>
      <CompletedMatches />
      <CurrentMatch />
    </main>
  );
}

export default Main;
