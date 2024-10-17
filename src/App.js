import React, { useState } from 'react';
import './index.css';

const TriviaBoard = () => {
  const [names, setNames] = useState(Array(32).fill(''));

  const allItems = [
    "Has done stand up comedy",
    "Hobby is to make ice cream",
    "Was on their countries national rowing team",
    "Trick or treated at CR7 house",
    "Was formerly a cop",
    "Used to heat his basement with bitcoin mining machines",
    "Michigan high school state tennis champion",
    "Speaks three languages",
    "Family owns a farm in central California",
    "Has been a podcast producer",
    "Played college sports",
    "Single handedly crashed the cellular network in KSA",
    "Was Atif's college roommate",
    "Is a Y combinator alum",
    "Was a college student when they started with thirdweb",
    "Worked as a car salesman",
    "Has been a member of a DAO",
    "Is a structural engineer by training",
    "Likes eating apples and ramen",
    "Grew up in Malaysia",
    "Contributed to at least 5 OS projects",
    "Named one of the brightest minds under 30",
    "Published an animation video about a caterpillar",
    "Has founded at least 2 companies",
    "Has an MBA",
    "Happy with a good glass of alcohol",
    "Favorite book is head first programming",
    "Is a bulls fan but isn't in Chicago",
    "Has done buildspace nights and weekends",
    "Won a hackathon",
    "Has YouTube videos in two languages",
    "neovim after midnight"
  ];

  const handleNameChange = (index, value) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Thirdweb Team Trivia</h2>
      <div className="grid grid-cols-4 gap-2">
        {allItems.map((item, index) => (
          <div 
            key={index} 
            className={`aspect-square border-2 border-yellow-500 p-2 text-xs flex flex-col items-center justify-between
              bg-yellow-200 ${names[index] ? "bg-green-200" : ""}`}
          >
            <div className="text-center mb-1 flex-grow overflow-auto">{item}</div>
            <input
              type="text"
              value={names[index]}
              onChange={(e) => handleNameChange(index, e.target.value)}
              className="w-full text-center border-b border-yellow-500 focus:outline-none focus:border-blue-500 text-xs bg-transparent"
              placeholder="Enter name"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TriviaBoard />
    </div>
  );
}

export default App;