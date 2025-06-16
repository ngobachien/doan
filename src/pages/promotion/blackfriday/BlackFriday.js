import React from 'react';
import IncentiveStructure from './components/IncentiveStructure';
import HowToGetOffer from './components/HowToGetOffer';
import TermsConditions from './components/TermsConditions';
import './BlackFriday.css';

function BlackFriday() {
  return (
    <div className="black-friday-page">
      <IncentiveStructure />
      <HowToGetOffer />
      <TermsConditions />
    </div>
  );
}

export default BlackFriday;
