import React, { useState, useEffect, useRef } from 'react';
import './HeaderMenu.css';

function HeaderMenu({ currentPage, onPageChange, openDropdown, setOpenDropdown, menuRef }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Hàm để đóng dropdown với delay
  const handleMouseLeave = () => {
    if (!isMobile) {
      closeTimeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 300); // Delay 300ms trước khi đóng
    }
  };

  // Hàm để mở dropdown và hủy timeout đóng
  const handleMouseEnter = (key) => {
    if (!isMobile) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setOpenDropdown(key);
    }
  };

  // Cleanup timeout khi component unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMenuClick = (key, hasDropdown = false) => {
    if (!hasDropdown) {
      onPageChange(key);
      setOpenDropdown(null);
      if (isMobile) {
        setIsMobileMenuOpen(false);
      }
    } else {
      setOpenDropdown(openDropdown === key ? null : key);
    }
  };
  const menuItems = [
    { key: 'home', label: 'TRANG CHỦ' },
    { key: 'about', label: 'ABOUT US' },
    { key: 'products', label: 'SẢN PHẨM', dropdown: [
      { key: 'product1', label: 'All products' },
      { key: 'product2', label: 'Billiard cue' },
      { key: 'product3', label: 'Jumping stick' },
      { key: 'product4', label: 'Wrecking stick' },
      { key: 'product5', label: 'Accessories included' },
    ] },
    { key: 'brands', label: 'THƯƠNG HIỆU', dropdown: [
      { key: 'brand1', label: 'Cuetec' },
      { key: 'brand2', label: 'Fury' },
      { key: 'brand3', label: 'Peri' },
    ] },
    { key: 'news', label: 'TIN TỨC' },
    { key: 'posts', label: 'BÀI VIẾT' },
    { key: 'promotions', label: 'KHUYẾN MÃI', dropdown: [
      { key: 'promo1', label: 'Summer Sale' },
      { key: 'promo2', label: 'Black Friday' },
    ] },
    { key: 'contact', label: 'LIÊN HỆ' },
  ];

  return (
    <div className="header-menu-container" ref={menuRef}>
      {/* Mobile Menu Button */}
      <button
        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Menu */}
      <nav className={`header-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {menuItems.map((item) => {
          const isDropdownActive = item.dropdown && item.dropdown.some(sub => currentPage === sub.key);
          const isOpen = openDropdown === item.key;
          return (
            <div
              key={item.key}
              className={`menu-item${item.dropdown ? ' has-dropdown' : ''}${isDropdownActive ? ' active' : ''}`}
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.key)}
              onMouseLeave={() => item.dropdown && handleMouseLeave()}
            >
              <button
                className={`menu-link${currentPage === item.key || isDropdownActive ? ' active' : ''}`}
                onClick={() => handleMenuClick(item.key, !!item.dropdown)}
                type="button"
              >
                {item.label} {item.dropdown && <span className="dropdown-arrow">▼</span>}
              </button>
              {item.dropdown && (
                <div className={`dropdown-menu${isOpen ? ' show' : ''}`}
                  onMouseEnter={() => handleMouseEnter(item.key)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  {item.dropdown.map((sub) => (
                    <button
                      key={sub.key}
                      className={`dropdown-item${currentPage === sub.key ? ' active' : ''}`}
                      onClick={() => {
                        onPageChange(sub.key);
                        setOpenDropdown(null);
                        if (isMobile) {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      type="button"
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default HeaderMenu;