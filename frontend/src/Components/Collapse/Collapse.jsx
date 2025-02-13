import React, { useState } from 'react';
import './Collapse.css';
import { ArrowBackIos } from "@mui/icons-material";

const Collapse = ({ title, children }) => { // Affiche une section collapse avec un titre et un contenu
  const [isOpen, setIsOpen] = useState(false); // État pour savoir si la section est ouverte ou fermée
  const [isClosing, setIsClosing] = useState(false); // État pour savoir si la section est en train de se fermer

  const toggleCollapse = () => { // Fonction pour ouvrir ou fermer la collapse
    if (isOpen) {
      setIsClosing(true); // Met à jour l'état isClosing à true pour l'animation de fermeture
      setTimeout(() => { // Met à jour l'état isOpen et isClosing après la durée de l'animation
        setIsOpen(false); // Met à jour l'état isOpen à false pour fermer la section
        setIsClosing(false); // Met à jour l'état isClosing à false pour arrêter l'animation
      }, 600); // Durée de l'animation de fermeture
    } else {
      setIsOpen(true); // Met à jour l'état isOpen à true pour ouvrir la section
    }
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}> {/* Appelle la fonction toggleCollapse lors du clic */}
        <h2 className="collapse-title">{title}</h2>
        {/* Icône de la flèche */}
        <ArrowBackIos className={`collapse-chevron ${isOpen ? "open" : "closed"}`} />
      </div>
      <div className={`collapse-content ${isOpen ? "animate" : ""}`}> {/* Ajoute la classe "animate" pour l'animation d'ouverture */}
        {/* Contenu de la section collapse */}
        <div className={isClosing ? "closing" : ""}>{children}</div> {/* Ajoute la classe "closing" pendant l'animation de fermeture */}
      </div>
    </div>
  );
};

export default Collapse;
