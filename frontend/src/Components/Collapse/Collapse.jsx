import React, { useState } from 'react';
import './Collapse.css';
import { ArrowBackIos } from "@mui/icons-material";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2 className="collapse-title">{title}</h2>
        <ArrowBackIos className={`collapse-chevron ${isOpen ? "open" : "closed"}`} />
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
