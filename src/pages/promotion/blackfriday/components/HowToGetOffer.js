import React from 'react';
import './HowToGetOffer.css';

const HowToGetOffer = () => {
  const steps = [
    {
      number: '1.',
      title: '🎯 Chọn sản phẩm',
      highlight: 'cơ bida yêu thích',
      description: 'và thêm vào giỏ hàng.'
    },
    {
      number: '2.',
      title: '💳 Tại trang',
      highlight: 'thanh toán',
      description: ', nhập mã khuyến mãi bạn đã copy ở trang này.'
    },
    {
      number: '3.',
      title: '✅ Nhấn',
      highlight: '"Áp dụng"',
      description: 'để xem giảm giá được áp dụng.'
    },
    {
      number: '4.',
      title: '🚀 Hoàn tất',
      highlight: 'thanh toán',
      description: 'và chờ xác nhận đơn hàng.'
    }
  ];

  return (
    <section className="how-to-get-offer">
      <div className="offer-container">
        <div className="content-wrapper">
          <div className="text-content">
            <h2 className="offer-title">🛍️ Cách nhận ưu đãi</h2>
            
            <div className="steps-list">
              {steps.map((step, index) => (
                <div key={index} className="step-item">
                  <span className="step-number">{step.number}</span>
                  <div className="step-text">
                    <span className="step-title">{step.title} </span>
                    <span className="step-highlight">{step.highlight}</span>
                    <span className="step-description"> {step.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="image-content">
            <div className="billiard-showcase">
              <div className="billiard-table">
                <div className="table-surface">
                  <div className="table-pocket pocket-1"></div>
                  <div className="table-pocket pocket-2"></div>
                  <div className="table-pocket pocket-3"></div>
                  <div className="table-pocket pocket-4"></div>
                  <div className="billiard-balls">
                    <div className="ball ball-white"></div>
                    <div className="ball ball-red"></div>
                    <div className="ball ball-yellow"></div>
                    <div className="ball ball-blue"></div>
                  </div>
                </div>
                <div className="table-rails">
                  <div className="rail rail-top"></div>
                  <div className="rail rail-bottom"></div>
                  <div className="rail rail-left"></div>
                  <div className="rail rail-right"></div>
                </div>
              </div>
              <div className="billiard-cue">
                <div className="cue-stick">
                  <div className="cue-tip"></div>
                  <div className="cue-shaft"></div>
                  <div className="cue-wrap"></div>
                  <div className="cue-butt"></div>
                </div>
              </div>
              <div className="floating-elements">
                <div className="element element-1">🎱</div>
                <div className="element element-2">🏆</div>
                <div className="element element-3">💎</div>
                <div className="element element-4">⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToGetOffer;
