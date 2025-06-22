import React from "react";
import "./Inspiration.css";

const Inspiration = () => (
  <section className="inspiration-section">
    <div className="inspiration-content">
      <h2 className="inspiration-title">CẢM HỨNG CHO THẾ HỆ MỚI</h2>
      <p className="inspiration-desc">
        Hơn một thập kỷ trước, ngành công nghiệp Billiards tại Việt Nam vẫn còn chưa phát triển. Billiards được biết đến với những cái tên đầy định kiến ​​là "trò chơi ma quỷ" hay "thú vui vô bổ". Nhưng trong những năm gần đây, Billiards đã phát triển nhanh chóng và mạnh mẽ, thu hút hàng triệu người trên khắp cả nước. Chiến thắng vẻ vang của cơ thủ Dương Quốc Hoàng năm 2018 đánh bại ngôi sao người Mỹ Shane Van Boening - một tượng đài trong làng bida thế giới với bộ sưu tập đầy đủ các danh hiệu danh giá nhất, đã tiếp thêm ngọn lửa đam mê Billiards trong giới trẻ.
      </p>
    </div>
    <div className="inspiration-img-wrap">
      <img
        src="./images/about/moi.png"
        alt="Inspiration for the new generation"
        className="inspiration-img"
      />
    </div>
  </section>
);

export default Inspiration;