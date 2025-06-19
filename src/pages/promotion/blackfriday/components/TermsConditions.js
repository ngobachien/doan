import React from 'react';
import './TermsConditions.css';

const TermsConditions = () => {
  const terms = [
    {
      number: '1.',
      title: '🎯 Áp dụng cho tất cả khách hàng',
      description: 'mua sắm trên website Billiardss.pro.'
    },
    {
      number: '2.',
      title: '🎁 Mỗi khách hàng có thể sử dụng',
      highlight: 'nhiều mã giảm giá',
      description: 'tùy theo giá trị đơn hàng.'
    },
    {
      number: '3.',
      title: '🚫 Không áp dụng đồng thời với các chương trình khuyến mãi, voucher hoặc mã giảm giá khác ngoại trừ ưu đãi vận chuyển.'
    },
    {
      number: '4.',
      title: '💰 Ưu đãi chỉ áp dụng khi tổng giá trị sản phẩm',
      highlight: 'không bao gồm phí vận chuyển',
      description: 'đạt ngưỡng quy định.'
    },
    {
      number: '5.',
      title: '⚖️ Website có quyền từ chối hoặc thu hồi ưu đãi nếu phát hiện gian lận hoặc vi phạm quy định.'
    },
    {
      number: '6.',
      title: '📞 Mọi thắc mắc vui lòng',
      highlight: 'liên hệ',
      description: 'với chúng tôi qua hotline: 0123.456.789'
    }
  ];

  return (
    <section className="terms-conditions">
      <div className="terms-container">
        <div className="content-wrapper">
          <div className="image-content">
            <div className="premium-showcase">
              <div className="premium-cues">
                <div className="cue-display cue-1">
                  <div className="cue-body">
                    <div className="cue-tip-section"></div>
                    <div className="cue-shaft-section"></div>
                    <div className="cue-joint"></div>
                    <div className="cue-butt-section"></div>
                  </div>
                  <div className="cue-label">Cuetec</div>
                </div>
                <div className="cue-display cue-2">
                  <div className="cue-body">
                    <div className="cue-tip-section"></div>
                    <div className="cue-shaft-section"></div>
                    <div className="cue-joint"></div>
                    <div className="cue-butt-section"></div>
                  </div>
                  <div className="cue-label">Fury</div>
                </div>
                <div className="cue-display cue-3">
                  <div className="cue-body">
                    <div className="cue-tip-section"></div>
                    <div className="cue-shaft-section"></div>
                    <div className="cue-joint"></div>
                    <div className="cue-butt-section"></div>
                  </div>
                  <div className="cue-label">Peri</div>
                </div>
              </div>
              <div className="accessories-display">
                <div className="accessory chalk">
                  <div className="chalk-cube"></div>
                  <div className="chalk-label">Chalk</div>
                </div>
                <div className="accessory case">
                  <div className="case-body"></div>
                  <div className="case-label">Case</div>
                </div>
              </div>
              <div className="floating-elements">
                <div className="element element-1">🎱</div>
                <div className="element element-2">🏆</div>
                <div className="element element-3">💎</div>
                <div className="element element-4">⚡</div>
              </div>
            </div>
          </div>
          
          <div className="text-content">
            <h2 className="terms-title">📋 Điều khoản & Điều kiện</h2>
            
            <div className="terms-list">
              {terms.map((term, index) => (
                <div key={index} className="term-item">
                  <span className="term-number">{term.number}</span>
                  <div className="term-text">
                    <span className="term-title">{term.title} </span>
                    {term.highlight && (
                      <span className="term-highlight">{term.highlight}</span>
                    )}
                    {term.description && (
                      <span className="term-description"> {term.description}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
