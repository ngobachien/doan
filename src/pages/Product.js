import React from 'react';
import './Product.css';
import Dun from './product/biliard/dun';
import Test from './product/allproduct/test';
import Chien from './product/jumping/chien';
import Chienn from './product/stick/chienn';
import Dungg from './product/inclued/dungg';

function Product({ category }) {
  // Map category to appropriate component
  const renderProductContent = () => {
    switch (category) {
      case 'product1':
        return <Test />;
      case 'product2':
        return <Dun />;
      case 'product3':
        return <Chien />;
      case 'product4':
        return <Chienn />;
      case 'product5':
        return <Dungg/>;
      case 'products':
      default:
    }
  };

  return (
    <div className="product-page">
      {renderProductContent()}
    </div>
  );
}

export default Product;
