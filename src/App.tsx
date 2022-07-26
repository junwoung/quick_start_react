import React from 'react';
import { Index } from './pages/Index';
import { Home } from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="p-2">
      <Index />
      <Home />
    </div>
  );
};

export default App;
