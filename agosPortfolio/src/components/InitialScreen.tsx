import React from 'react';
import './InitialScreen.css';

interface InitialScreenProps {
  onEnter: () => void;
}

const InitialScreen: React.FC<InitialScreenProps> = ({ onEnter }) => {
  return (
    <div className="initial-screen">
        <h1 className="titulo">Portfolio de Agostina</h1>
        <button className="enter-button" onClick={onEnter}>Ingresar</button>
    </div>
  );
};

export default InitialScreen;
