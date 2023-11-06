import React from 'react';
import MyBotCard from './MyBotCard';

const MyBotArmy = ({ bots, dischargeBot }) => {
  return (
    <div className='your-bot-army'>
      <h2>My Bot Army</h2>
      {bots.map((bot) => (
        <MyBotCard
          key={bot.id}
          bot={bot}
          actionLabel="Discharge"
          actionHandler={() => dischargeBot(bot.id)}
        />
      ))}
    </div>
  )
}

export default MyBotArmy;