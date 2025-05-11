import React from 'react';
import './FolderIcon.css';

interface FolderIconProps {
  name: string;
  onOpen: () => void;
}

const FolderIcon: React.FC<FolderIconProps> = ({ name, onOpen }) => {
  return (
    <div className="folder-icon" onClick={onOpen}>
      <div className="folder-image" />
      <span>{name}</span>
    </div>
  );
};

export default FolderIcon;
