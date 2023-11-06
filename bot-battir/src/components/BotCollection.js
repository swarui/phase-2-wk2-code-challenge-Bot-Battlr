import React, { useState } from 'react';
import MyBotCard from './MyBotCard';
import BotSpecs from './BotSpecs';

const BotCollection = ({ bots, enlistBot }) => {
  const [selectedBot, setSelectedBot] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleBotClick = (bot) => {
    setSelectedBot(bot);
  };

  const handleBackToCollection = () => {
    setSelectedBot(null);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter bots based on the selected category
  const filteredBots = selectedCategory === 'All'
    ? bots
    : bots.filter((bot) => bot.bot_class === selectedCategory);

  // Create an array of unique bot categories for the dropdown options
  const botCategories = ['All', ...new Set(bots.map((bot) => bot.bot_class))];

  return (
    <div className="bot-collection">
      <h2>All Bots</h2>
      <div>
        <label>Select Category:</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {botCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} goBack={handleBackToCollection} enlistBot={enlistBot} />
      ) : (
        filteredBots.map((bot) => (
          <MyBotCard key={bot.id} bot={bot} actionLabel="Enlist" actionHandler={() => handleBotClick(bot)} />
        ))
      )}
    </div>
  );
};

export default BotCollection;