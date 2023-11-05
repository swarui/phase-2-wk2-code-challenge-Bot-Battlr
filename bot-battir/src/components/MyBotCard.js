import React from 'react';

const MyBotCard = ({ bot, actionLabel, actionHandler }) => {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  const getCatchphrase = () => {
    const phrases = catchphrase.split('|');
    return phrases[Math.floor(Math.random() * phrases.length)];
  };