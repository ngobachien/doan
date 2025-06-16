import React, { useState } from 'react';
import './IncentiveStructure.css';

const IncentiveStructure = () => {
  const [copiedCode, setCopiedCode] = useState('');

  // Tính toán ngày kết thúc (5 ngày từ hôm nay)
  const getEndDate = () => {
    const today = new Date();
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 5);

    const day = endDate.getDate().toString().padStart(2, '0');
    const month = (endDate.getMonth() + 1).toString().padStart(2, '0');
    const year = endDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  // Tính toán ngày bắt đầu (hôm nay)
  const getStartDate = () => {
    const today = new Date();

    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const incentiveData = [
    {
      orderValue: 'Đơn hàng từ 20,000,000 VND',
      discountLevel: 'Giảm ngay 2,000,000 VND',
      discountCode: 'BLACKFRIDAY2M',
      discount: '2,000,000 VND off'
    },
    {
      orderValue: 'Đơn hàng từ 5,000,000 VND',
      discountLevel: 'Giảm ngay 450,000 VND',
      discountCode: 'BLACKFRIDAY450K',
      discount: '450,000 VND off'
    },
    {
      orderValue: 'Đơn hàng từ 1,000,000 VND',
      discountLevel: 'Giảm ngay 100,000 VND',
      discountCode: 'BLACKFRIDAY100K',
      discount: '100,000 VND off'
    }
  ];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  return (
    <section className="incentive-structure">
      <div className="incentive-container">
        <div className="countdown-banner">
          <div className="countdown-text">⏰ Chỉ còn 5 ngày! Khuyến mãi kết thúc {getEndDate()}</div>
        </div>
        <div className="title-section">
          <h1 className="incentive-title">🔥 BLACK FRIDAY MEGA SALE 🔥</h1>
          <p className="incentive-subtitle">Ưu đãi khủng cho tất cả sản phẩm cơ bida cao cấp</p>
        </div>

        <div className="incentive-table">
          <div className="table-header">
            <div className="header-cell">GIÁ TRỊ ĐỚN HÀNG</div>
            <div className="header-cell">MỨC GIẢM GIÁ</div>
            <div className="header-cell">MÃ GIẢM GIÁ</div>
          </div>
          
          <div className="table-body">
            {incentiveData.map((item, index) => (
              <div key={index} className="table-row">
                <div className="table-cell order-value" data-label="ORDER VALUE:">
                  {item.orderValue}
                </div>
                <div className="table-cell discount-level" data-label="DISCOUNT LEVEL:">
                  {item.discountLevel}
                </div>
                <div className="table-cell discount-code" data-label="DISCOUNT CODE:">
                  <div className="code-container">
                    <span className="code-text">{item.discountCode}</span>
                    <button
                      className={`copy-btn ${copiedCode === item.discountCode ? 'copied' : ''}`}
                      onClick={() => handleCopyCode(item.discountCode)}
                    >
                      {copiedCode === item.discountCode ? '✓' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="note-section">
          <h2 className="note-title">📋 LƯU Ý QUAN TRỌNG</h2>
          <div className="note-content">
            <p>🎯 Chương trình áp dụng cho tất cả sản phẩm cơ bida, phụ kiện.</p>
            <p>📅 Khuyến mãi có hiệu lực từ ngày {getStartDate()} đến {getEndDate()}.</p>
            <p>⚡ Số lượng khuyến mãi có hạn, có thể kết thúc sớm.</p>
            <p>🚚 Miễn phí vận chuyển toàn quốc cho đơn hàng từ 500,000 VND.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncentiveStructure;
