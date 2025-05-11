import React, { useState } from 'react';
import './Desktop.css';
import FolderIcon from './FolderIcon';
import Window from './Window';

const Desktop: React.FC = () => {
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const openFolder = (folderName: string) => {
    setOpenWindows([folderName]); // Reemplazar la ventana abierta con la nueva
  };

  const closeWindow = (folderName: string) => {
    setOpenWindows(openWindows.filter(name => name !== folderName));
  };

  return (
    <div className="desktop">
      <FolderIcon name="Sobre mí" onOpen={() => openFolder('Sobre mí')} />
      <FolderIcon name="Proyectos" onOpen={() => openFolder('Proyectos')} />
      <FolderIcon name="Contacto" onOpen={() => openFolder('Contacto')} />

      {openWindows.map(folderName => (
        <Window key={folderName} title={folderName} onClose={() => closeWindow(folderName)}>
          {folderName === "Sobre mí" && <img src="/src/assets/aboutme.png" id='aboutmeContent' alt="Sobre mí" />}
          {folderName === "Proyectos" && <img src="/src/assets/aboutme.png" id='' alt="Proyectos" style={{ width: '100%' }} />}
          {folderName === "Contacto" && <img src="/src/assets/aboutme.png" id='' alt="Contacto" style={{ width: '100%' }} />}
        </Window>
      ))}
    </div>
  );
};

export default Desktop;
