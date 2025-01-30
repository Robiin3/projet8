import React, { useState } from 'react';
import './Collapse.css';
import { ArrowBackIos } from "@mui/icons-material";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleCollapse = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 600); // Durée de l'animation de fermeture
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2 className="collapse-title">{title}</h2>
        <ArrowBackIos className={`collapse-chevron ${isOpen ? "open" : "closed"}`} />
      </div>
      <div className={`collapse-content ${isOpen ? "animate" : ""}`}>
        <p className={isClosing ? "closing" : ""}>{children}</p>
      </div>
    </div>
  );
};

export default Collapse;
