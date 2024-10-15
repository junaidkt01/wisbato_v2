"use client"

import { useEffect, useState } from 'react';
import "./Header.css";
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import { Link, useLocation } from 'react-router-dom';


const NavLinks = () => {
  // const params = usePathname();
  const location = useLocation();
  const params = location.pathname;

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition >= 77);

      if (scrollPosition !== 77) {
        setIsOpen(false)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    setScrolled(false)
  };

  const navLinks = [
    { href: "/works", text: "works" },
    { href: "/services", text: "services" },
    { href: "/blogs", text: "blogs" },
    { href: "/about", text: "about" },
    { href: "/team", text: "team" },
    { href: "/careers", text: "careers" }
  ];

  // const renderLinks = (isDropdown = false) =>
  //   navLinks.map(({ href, text }, index) => (
  //     <Link key={index} href={href} className={`nav-link${isDropdown ? "-res" : ""}`} style={{ color: params === href ? "#f7931e" : "" }}>{text}</Link>
  //   ));

  const renderLinks = (isDropdown = false) =>
    navLinks.map(({ href, text }, index) => {
      const isActive = params.startsWith(href);
      return (
        <Link onClick={() => window.scrollTo(0, 0)} key={index} to={href} className={`nav-link${isDropdown ? "-res" : ""}`} style={{ color: isActive ? "#f7931e" : "" }}>{text}</Link>
      );
    });


  return (
    <div className='header-nav-links-section'>
      <div className='header-nav-links' >
        <div className={`header-rest-links ${scrolled ? "hide" : "show"}`}>
          {renderLinks()}
        </div>
        <div style={{ display: scrolled ? "unset" : "unset" }} className={`header-menu-icon ${isOpen ? "active" : ""} ${scrolled ? "show" : "hide"}`} >
          {/* <svg onMouseEnter={toggleDropdown} onClick={toggleDropdown} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
          <svg onClick={toggleDropdown} width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12H19.5" className="showBurger" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4.5 17.7692H19.5" className="showBurger" strokeLinecap="round" />
            <path d="M4.5 6.23077H19.5" className="showBurger" strokeLinecap="round" />
          </svg>
        </div>
        <div className={`header-contact-link ${isOpen ? "active" : ""}`}>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className={`nav-link`} >contact</Link>
        </div>
      </div>

      <div className={`header-drop-down ${isOpen ? "active" : ""}`}>
        <div className='dropdown-nav-links'>
          {renderLinks(true)}
        </div>
      </div>
    </div>
  );
};

export default NavLinks;