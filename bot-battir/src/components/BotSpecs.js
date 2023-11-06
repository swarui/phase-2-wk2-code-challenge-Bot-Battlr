// src/components/BotSpecs.js
import React from 'react';

const BotSpecs = ({ bot, goBack, enlistBot }) => {
  const { name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div className="bot-specs">
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <p className="catchphrase">{catchphrase}</p>
      <button className="button-86"onClick={goBack}>Back to List</button>
      <button className="button-78"onClick={() => enlistBot(bot.id)}>Enlist</button>
    </div>
  );
};

export default BotSpecs;