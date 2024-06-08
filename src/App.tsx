import React from 'react';

import './App.css';

import SportEventsService from './SportEventsService';

const App: React.FC = () => {
  return (
    <div className="App">
      <SportEventsService />
    </div>
  );
};

export default React.memo(App);
