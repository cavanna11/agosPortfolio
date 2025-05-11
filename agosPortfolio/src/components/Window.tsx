import React from 'react';
import './Window.css';

interface WindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ title, onClose, children }) => {
  return (
    <div className="window">
      <div className="window-header">
        <span>{title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
};

export default Window;
