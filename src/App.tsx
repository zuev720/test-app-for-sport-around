import React from 'react';

import './App.css';
import SportEventsService from './SportEventsService/SportEventsService';

const App: React.FC = () => {
  const props = {
    days: 12,
    hours: 2,
    minutes: 24,
    seconds: 56,
  };

  return (
    <div className="App">
      <SportEventsService {...props} />
    </div>
  );
};

export default React.memo(App);
