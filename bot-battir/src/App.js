import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import MyBotArmy from "./components/MyBotArmy";
import "./App.css";
import AddBotForm from "./components/AddBotForm";

const App = () => {
  // Define state variables using useState hooks
  const [bots, setBots] = useState([]);
  const [myBotArmy, setMyBotArmy] = useState([]);
  // Fetch Data from the server
  useEffect(() => {
    fetch("https://template-1-0s60.onrender.com/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching data:", error));

    // Load enlisted bots from local storage
    const storedBotArmy = JSON.parse(localStorage.getItem("botArmy"));
    // Check and add robot to MyBotArmy
    if (storedBotArmy) {
      setMyBotArmy(storedBotArmy);
    }
  }, []);
  // EnlistBot' action makes sure the same robot isn't added twice to your team.
  const enlistBot = (botId) => {
    // Find robot by unique id in bots box
    const selectedBot = bots.find((bot) => bot.id === botId);
    if (!myBotArmy.some((bot) => bot.id === botId)) {
      const updatedBotArmy = [...myBotArmy, selectedBot];
      setMyBotArmy(updatedBotArmy);
      // Save enlisted bots to local storage
      localStorage.setItem("botArmy", JSON.stringify(updatedBotArmy));
    }
  };

  const addBot = (newBot) => {
    // Generate a unique ID for the new bot added
    newBot.id = Date.now();
    // Update the bots state with the new bot added
    setBots([...bots, newBot]);
  };
  // The 'dischargeBot' action removes the robot from your team if you click on it again.
  const dischargeBot = (botId) => {
    // Filter out the clicked robot from the team using it'sunique id
    const updatedBotArmy = myBotArmy.filter((bot) => bot.id !== botId);
    // Place the new team excluding the robot back in the 'MyBotArmy' box
    setMyBotArmy(updatedBotArmy);
    // Save enlisted bots to local storage
    localStorage.setItem("botArmy", JSON.stringify(updatedBotArmy));
  };
  // Return the JSX for the App component
  return (
    <div className="App">
      <div className="container">
        <BotCollection bots={bots} enlistBot={enlistBot} />
        <MyBotArmy bots={myBotArmy} dischargeBot={dischargeBot} />
        <AddBotForm addBot={addBot} />
      </div>
    </div>
  );
};

export default App;
