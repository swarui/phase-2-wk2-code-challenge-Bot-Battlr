import React, { useState } from "react";

const AddBotForm = ({ addBot }) => {
  const [name, setName] = useState("");
  const [health, setHealth] = useState("");
  const [damage, setDamage] = useState("");
  const [armor, setArmor] = useState("");
  const [bot_class, setBotClass] = useState("");
  const [catchphrase, setCatchphrase] = useState("");
  const [avatar_url, setAvatarUrl] = useState("");
};

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
