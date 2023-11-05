import React, { useState } from 'react';

const AddBotForm = ({ addBot }) => {
  const [name, setName] = useState('');
  const [health, setHealth] = useState('');
  const [damage, setDamage] = useState('');
  const [armor, setArmor] = useState('');
  const [bot_class, setBotClass] = useState('');
  const [catchphrase, setCatchphrase] = useState('');
  const [avatar_url, setAvatarUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBot = {
      name,
      health: parseInt(health),
      damage: parseInt(damage),
      armor: parseInt(armor),
      bot_class,
      catchphrase,
      avatar_url,
    };
    addBot(newBot);
    setName('');
    setHealth('');
    setDamage('');
    setArmor('');
    setBotClass('');
    setCatchphrase('');
    setAvatarUrl('');
  };

  return (
    <div className="add-bot-form">
      <h2>Add a New Bot</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Health:</label>
        <input type="number" value={health} onChange={(e) => setHealth(e.target.value)} required />

        <label>Damage:</label>
        <input type="number" value={damage} onChange={(e) => setDamage(e.target.value)} required />

        <label>Armor:</label>
        <input type="number" value={armor} onChange={(e) => setArmor(e.target.value)} required />

        <label>Class:</label>
        <input type="text" value={bot_class} onChange={(e) => setBotClass(e.target.value)} required />

        <label>Catchphrase:</label>
        <input type="text" value={catchphrase} onChange={(e) => setCatchphrase(e.target.value)} required />

        <label>Avatar URL:</label>
        <input type="text" value={avatar_url} onChange={(e) => setAvatarUrl(e.target.value)} required />

        <button className="button-78" type="submit">Add Bot</button>
      </form>
    </div>
  );
};

export default AddBotForm;