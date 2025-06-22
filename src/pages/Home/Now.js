import React from "react";
import "./Now.css";

const Now = ({ onPageChange }) => {
  return (
    <section className="hero-evo-section">
      <div className="hero-evo-bg">
        <div className="hero-evo-content">
          <h1>Đua xe tê giác Evo</h1>
          <p>
            Lấy cảm hứng từ sự phấn khích của đường đua, Evo Racing nắm bắt sức mạnh và tốc độ của những chiếc xe hiệu suất cao. Thiết kế bóng bẩy của nó khơi dậy tinh thần cạnh tranh, đưa mọi trận đấu lên tầm cao mới của sự phấn khích.
          </p>
          <button onClick={() => onPageChange && onPageChange("products")}>
            Mua ngay
          </button>
        </div>
        <div className="hero-evo-flag"></div>
      </div>
    </section>
  );
};

export default Now;