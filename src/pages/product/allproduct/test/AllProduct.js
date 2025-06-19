import React, { useState } from "react";
import "./AllProduct.css";

const products = [
  {
    id: 1,
    name: "Instroke Bag. 4-8. glide",
    image: "./images/allproduct/1.png",
    price: 4456789,
    oldPrice: 4456700,
    discount: true,
    rating: 5,
    reviews: 2,
    options: true,
  },
  {
    id: 2,
    name: "Genuine White Kylin Cue Case",
    image: "./images/allproduct/2.png",
    price: 3500000,
    oldPrice: 3700000,
    discount: true,
    rating: 0,
    reviews: 0,
    options: false,
  },
  {
    id: 3,
    name: "Predator White Leather Cue Case",
    image: "./images/allproduct/3.png",
    price: 4000000,
    oldPrice: 4200000,
    discount: true,
    rating: 4,
    reviews: 1,
    options: false,
  },
  {
    id: 4,
    name: "McDermott Black Nylon Cue Case",
    image: "./images/allproduct/4.png",
    price: 3200000,
    oldPrice: 3400000,
    discount: true,
    rating: 3,
    reviews: 2,
    options: false,
  },
  {
    id: 5,
    name: "Viking Deluxe Hard Cue Case",
    image: "./images/allproduct/5.png",
    price: 3800000,
    oldPrice: 4000000,
    discount: true,
    rating: 4,
    reviews: 1,
    options: false,
  },
  {
    id: 6,
    name: "Cuetec Soft White Cue Case",
    image: "./images/allproduct/6.png",
    price: 3000000,
    oldPrice: 3200000,
    discount: true,
    rating: 3,
    reviews: 0,
    options: false,
  },
  {
    id: 7,
    name: "Meucci Premium Cue Case",
    image: "./images/allproduct/7.png",
    price: 4200000,
    oldPrice: 4500000,
    discount: true,
    rating: 5,
    reviews: 2,
    options: false,
  },
  {
    id: 8,
    name: "Jacoby Custom Cue Case",
    image: "./images/allproduct/8.png",
    price: 3900000,
    oldPrice: 4100000,
    discount: true,
    rating: 4,
    reviews: 1,
    options: false,
  },
  {
    id: 9,
    name: "Pechauer Hard Shell Cue Case",
    image: "./images/allproduct/9.png",
    price: 3600000,
    oldPrice: 3800000,
    discount: true,
    rating: 3,
    reviews: 0,
    options: false,
  },
  {
    id: 10,
    name: "Schön Lightweight Cue Case",
    image: "./images/allproduct/10.png",
    price: 3300000,
    oldPrice: 3500000,
    discount: true,
    rating: 4,
    reviews: 1,
    options: false,
  },
  {
    id: 11,
    name: "Tiger Pro White Cue Case",
    image: "./images/allproduct/11.png",
    price: 3700000,
    oldPrice: 3900000,
    discount: true,
    rating: 5,
    reviews: 2,
    options: false,
  },
  {
    id: 12,
    name: "Lucky Durable Cue Case",
    image: "./images/allproduct/12.png",
    price: 3100000,
    oldPrice: 3300000,
    discount: true,
    rating: 3,
    reviews: 0,
    options: false,
  },
  {
    id: 13,
    name: "Elite Black Cue Case",
    image: "./images/allproduct/13.png",
    price: 3400000,
    oldPrice: 3600000,
    discount: true,
    rating: 4,
    reviews: 1,
    options: false,
  },
  {
    id: 14,
    name: "Players Soft Cue Case",
    image: "./images/allproduct/14.png",
    price: 2900000,
    oldPrice: 3100000,
    discount: true,
    rating: 3,
    reviews: 0,
    options: false,
  },
  {
    id: 15,
    name: "PERI- Break cue PBH-JPO2-W",
    image: "./images/allproduct/15.png",
    price: 9300000,
    oldPrice: null,
    discount: false,
    rating: 0,
    reviews: 0,
    options: false,
  },
  {
    id: 16,
    name: "PERI- Power Break PBH-BT3",
    image: "./images/allproduct/16.png",
    price: 9500000,
    oldPrice: null,
    discount: false,
    rating: 4,
    reviews: 1,
    options: false,
  },
  {
    id: 17,
    name: "PERI- Kunpeng Pro Break Cue",
    image: "./images/allproduct/17.png",
    price: 9100000,
    oldPrice: null,
    discount: false,
    rating: 3,
    reviews: 0,
    options: false,
  },
  {
    id: 18,
    name: "PERI- EX-Speed Break Cue",
    image: "./images/allproduct/18.png",
    price: 9400000,
    oldPrice: null,
    discount: false,
    rating: 4,
    reviews: 1,
    options: false,
  },
  {
    id: 19,
    name: "PERI- Knight ST Break Cue",
    image: "./images/allproduct/19.png",
    price: 9200000,
    oldPrice: null,
    discount: false,
    rating: 3,
    reviews: 0,
    options: false,
  },
  {
    id: 20,
    name: "PERI- Eastern Dragon Break Cue",
    image: "./images/allproduct/20.png",
    price: 9600000,
    oldPrice: null,
    discount: false,
    rating: 5,
    reviews: 2,
    options: false,
  },
  {
    id: 21,
    name: "PERI- Conqueror Break Cue",
    image: "./images/allproduct/21.png",
    price: 9300000,
    oldPrice: null,
    discount: false,
    rating: 4,
    reviews: 1,
    options: false,
  },
  {
    id: 22,
    name: "PERI- Kick-Off Break Cue",
    image: "./images/allproduct/22.png",
    price: 9000000,
    oldPrice: null,
    discount: false,
    rating: 3,
    reviews: 0,
    options: false,
  },
  {
    id: 23,
    name: "PERI- Pro-Taper Break Cue",
    image: "./images/allproduct/23.png",
    price: 9700000,
    oldPrice: null,
    discount: false,
    rating: 5,
    reviews: 2,
    options: false,
  },
  {
    id: 24,
    name: "PERI- 9 Ball Knight Break Cue",
    image: "./images/allproduct/24.png",
    price: 9400000,
    oldPrice: null,
    discount: false,
    rating: 4,
    reviews: 1,
    options: false,
  },
  {
    id: 25,
    name: "PERI- Jumper Power Break Cue",
    image: "./images/allproduct/25.png",
    price: 9100000,
    oldPrice: null,
    discount: false,
    rating: 3,
    reviews: 0,
    options: false,
  },
  {
    id: 26,
    name: "PERI- PT Break Punch Cue",
    image: "./images/allproduct/26.png",
    price: 9500000,
    oldPrice: null,
    discount: false,
    rating: 4,
    reviews: 1,
    options: false,
  },
  {
    id: 27,
    name: "PERI- SK Series Break Cue",
    image: "./images/allproduct/27.png",
    price: 9300000,
    oldPrice: null,
    discount: false,
    rating: 3,
    reviews: 0,
    options: false,
  },
  {
    id: 28,
    name: "PERI- SY Series Break Cue",
    image: "./images/allproduct/28.png",
    price: 9600000,
    oldPrice: null,
    discount: false,
    rating: 5,
    reviews: 2,
    options: false,
  },
  {
    id: 29,
    name: "Aramith Premier Billiard Ball Set",
    image: "./images/allproduct/29.png",
    price: 4500000,
    oldPrice: 4800000,
    discount: true,
    rating: 5,
    reviews: 3,
    options: false,
  },
  {
    id: 30,
    name: "Predator Chalk 1080 Pure",
    image: "./images/allproduct/30.png",
    price: 250000,
    oldPrice: 300000,
    discount: true,
    rating: 4,
    reviews: 5,
    options: false,
  },
  {
    id: 31,
    name: "Kamui Black Cue Tip",
    image: "./images/allproduct/31.png",
    price: 500000,
    oldPrice: 550000,
    discount: true,
    rating: 4,
    reviews: 2,
    options: true,
  },
  {
    id: 32,
    name: "Cuetec Bowtie Cue Tip Tool",
    image: "./images/allproduct/32.png",
    price: 350000,
    oldPrice: null,
    discount: false,
    rating: 3,
    reviews: 1,
    options: false,
  },
  {
    id: 33,
    name: "Predator Urbain Billiard Glove",
    image: "./images/allproduct/33.png",
    price: 400000,
    oldPrice: 450000,
    discount: true,
    rating: 4,
    reviews: 4,
    options: true,
  },
  {
    id: 34,
    name: "Moori Quick Laminated Cue Tip",
    image: "./images/allproduct/34.png",
    price: 450000,
    oldPrice: null,
    discount: false,
    rating: 3,
    reviews: 0,
    options: true,
  },
  {
    id: 35,
    name: "Diamond Professional Billiard Table",
    image: "./images/allproduct/35.png",
    price: 75000000,
    oldPrice: 80000000,
    discount: true,
    rating: 5,
    reviews: 1,
    options: true,
  },
  {
    id: 36,
    name: "Mezz Bridge Stick",
    image: "./images/allproduct/36.png",
    price: 1200000,
    oldPrice: 1300000,
    discount: true,
    rating: 4,
    reviews: 2,
    options: false,
  },
  {
    id: 37,
    name: "Predator Second Skin Glove",
    image: "./images/allproduct/37.png",
    price: 420000,
    oldPrice: null,
    discount: false,
    rating: 4,
    reviews: 3,
    options: true,
  },
  {
    id: 38,
    name: "Aramith Snooker Ball Set",
    image: "./images/allproduct/38.png",
    price: 4800000,
    oldPrice: 5100000,
    discount: true,
    rating: 5,
    reviews: 2,
    options: false,
  },
  {
    id: 39,
    name: "Cuetec Acueweight Kit",
    image: "./images/allproduct/39.png",
    price: 600000,
    oldPrice: null,
    discount: false,
    rating: 3,
    reviews: 1,
    options: true,
  },
  {
    id: 40,
    name: "Tiger Dynamite Cue Tip",
    image: "./images/allproduct/40.png",
    price: 470000,
    oldPrice: 500000,
    discount: true,
    rating: 4,
    reviews: 2,
    options: true,
  },
];

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
};

const AllProduct = () => {
  const [sort, setSort] = useState("best");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // 3 hàng x 4 cột = 12 sản phẩm mỗi trang

  // Tính toán sản phẩm hiển thị
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Tính tổng số trang
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="allproduct-toolbar">
        <div className="allproduct-filter">
          <span className="allproduct-filter-icon">⚙</span> Filter
        </div>
        <div className="allproduct-sort">
          <span>Sort by:</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="best">Best Seller</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
        <div className="allproduct-count">{products.length} products</div>
      </div>
      <div className="allproduct-grid">
        {currentProducts.map((product) => (
          <div className="allproduct-card" key={product.id}>
            <div className="allproduct-img-wrap">
              {product.discount && <span className="allproduct-discount">Discount</span>}
              <img
                src={product.image}
                alt={product.name}
                className="allproduct-img"
                onError={(e) => (e.target.src = '/images/placeholder.jpg')}
              />
            </div>
            <div className="allproduct-card-content">
              <div className="allproduct-card-top">
                <div className="allproduct-name">{product.name}</div>
                {product.rating > 0 && (
                  <div className="allproduct-rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < product.rating ? 'star filled' : 'star'}>
                        ★
                      </span>
                    ))}
                    <span className="allproduct-reviews">({product.reviews})</span>
                  </div>
                )}
              </div>
              <div className="allproduct-card-bottom">
                <div className="allproduct-prices">
                  {product.oldPrice && (
                    <span className="allproduct-oldprice">{formatPrice(product.oldPrice)}</span>
                  )}
                  <span className="allproduct-price">{formatPrice(product.price)}</span>
                </div>
                <button className="allproduct-btn">
                  {product.options ? 'Select options' : 'Add to cart'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="allproduct-pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};

export default AllProduct;