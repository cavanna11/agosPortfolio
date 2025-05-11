import React, { useState } from 'react';
import InitialScreen from './components/InitialScreen';
import Desktop from './components/Desktop';

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <div className="app">
      {hasEntered ? (
        <Desktop />
      ) : (
        <InitialScreen onEnter={handleEnter} />
      )}
    </div>
  );
};

export default App;
