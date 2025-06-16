import React from 'react';
import Uy from './promotion/super/uy'
import BlackFriday from './promotion/blackfriday/BlackFriday'
import './Promotion.css';

function Promotion({ promo }) {
  // Map promotion category to appropriate component
  const renderPromotionContent = () => {
    switch (promo) {
      case 'promo1':
        return <Uy />;
      case 'promo2':
        return <BlackFriday />;
      default:
        return null;
    }
  };

  return (
    <div className="promotion-page">
      {renderPromotionContent()}
    </div>
  );
}

export default Promotion;
