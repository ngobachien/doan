import React from 'react';
import './Trademark.css';
import Dung from './trademark/cuetec/dung';
import Fury from './trademark/fury/fury';
import Peri from './trademark/peri/peri';

function Trademark({ category }) {
  // Map category to appropriate content or component
  const renderTrademarkContent = () => {
    switch (category) {
      case 'brand1':
        return <Dung />;
      case 'brand2':
        return <Fury />;
      case 'brand3':
        return <Peri />;
      default:
        return null; // No content if category is invalid
    }
  };

  return (
    <div className="trademark-page">
      {renderTrademarkContent()}
    </div>
  );
}

export default Trademark;