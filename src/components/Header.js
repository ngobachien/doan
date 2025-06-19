import React, { useState, useRef, useEffect } from 'react';
import HeaderTop from './Header/HeaderTop';
import HeaderMenu from './Header/HeaderMenu';
import './Header.css';

function Header({ onPageChange, currentPage }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header sticky">
      <HeaderTop currentPage={currentPage} onPageChange={onPageChange} />
      <HeaderMenu
        currentPage={currentPage}
        onPageChange={onPageChange}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        menuRef={menuRef}
      />
    </header>
  );
}

export default Header;