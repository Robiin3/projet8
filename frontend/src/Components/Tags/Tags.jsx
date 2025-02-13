import React from 'react';
import './Tags.css';

const Tags = ({ tags }) => { // Composant Tags qui reçoit le tableau de tags en props
  return ( 
    <div className="tags-container"> 
      {tags.map((tag, index) => ( // Boucle sur le tableau `tags` et crée un élément <span> pour chaque tag
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
