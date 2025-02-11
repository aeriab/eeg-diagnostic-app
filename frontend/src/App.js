import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Dot />
    </div>
  );
}

function Dot() {
  //All my different useState variables
  const [isVisible, setVisibility] = useState(true);
  const [randomNumber, setRandomNumber] = useState(0);
  const [randomX, setRandomX] = useState(50);
  const [randomY, setRandomY] = useState(50);
  const [renderTrigger, setRenderTrigger] = useState(false);
  const [color, setColor] = useState(null);

  //Array of colors, can be modified for *aesthetic*
  let colorOptions = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "cyan",
    "purple",
    "pink",
  ];

  //Kind of an unecessary function but just groups together the changing of the dot's color and x,y coordinates
  function Rerender() {
    let rand = Math.floor(Math.random() * 8);
    setRandomNumber(rand);
    setColor(colorOptions[rand]);
    setRandomX(Math.floor(Math.random() * 81) + 10);
    setRandomY(Math.floor(Math.random() * 81) + 10);
  }

  //This function is kinda scuffed, there's probably a more elegant way to do this so if anyone has any ideas be my guest
  //Basically it starts by immediately hiding the dot for a few seconds, then it triggers the Rerender() function and then shows the dot in a new location with a diff color
  //Then, it changes the renderTrigger variable which triggers the useEffect() again. useEffect() is basically used in place of a for loop b/c you can't do that in React :(
  useEffect(() => {
    setTimeout(() => {
      setVisibility(false);
      setTimeout(() => {
        Rerender();
        setVisibility(true);
        setRenderTrigger(!renderTrigger);
      }, Math.floor(/*Math.random() * 5000 + */ 1000)); //Can change the timing on these if you want to make it random, right now it is set to 1 sec
    }, Math.floor(/*Math.random() * 5000 + */ 1000));
  }, [renderTrigger]);

  //Unecessary function but will be helpful later...
  function dotClicked() {
    setVisibility(false);
    console.log(color + " dot clicked.");
  }

  return (
    <div>
      <div className="pointer">
        <h1>+</h1>
      </div>
      <button
        onClick={() => dotClicked()}
        className="dot"
        style={{
          backgroundColor: colorOptions[randomNumber],
          left: randomX.toString() + "%",
          top: randomY.toString() + "%",
          visibility: isVisible ? "visible" : "hidden",
        }}
      ></button>
    </div>
  );
}

export default App;
