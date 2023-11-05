import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import MyBotArmy from './components/MyBotArmy';
import './App.css';
import AddBotForm from './components/AddBotForm';

const App = () =>{
  // Define the state variables using state hooks
  const [bots, setBots] = useState([]);
  const [myBotArmy, setMyBotArmy] = useState([]);

  // Fetch data from the server
  fetch('https://template-1-0s60.onrender.com/bots')
  .then((response) => response.json())
  .then((data) => setBot(data))
  .then((error) => console.error('Error fetching data:', error));
  
}