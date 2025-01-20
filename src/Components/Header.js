import React, { useState,useEffect } from 'react'

import image1 from '../assets/leaf-1.png';
import image2 from '../assets/leaf-2.png';

function Header() {
 const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

 // Function to highlight active navigation link based on scroll position
 const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("active");
    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};

useEffect(() => {
  window.addEventListener("scroll", activeLink);
  return () => {
    window.removeEventListener("scroll", activeLink); // Cleanup
  };
}, []);


// const sr=ScrollReveal({
//   origin:"top",
//   distance:"60px",
//   duration:2500,
//   delay:300,
//   reset:TextTrackCue;

// })

  return (
    <>
      <header id="navbar" className="bg-green-950 fixed w-full top-0 left-0 z-50">
        <nav className="container flex items-center justify-between h-16 sm:h-20">
          <div className="font-Lobster sm:text-2xl">
          <a href="#">IndorePlants</a></div>
          <div
            id="nav-menu"
            className={`absolute top-0 ${
              menuOpen ? "left-0" : "left-[-100%]"
            } min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
          >
            <ul className="flex flex-col items-center gap-8 lg:flex-row">
              <li>
                <a href="#home" className="nav-link active" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#popular" className="nav-link" onClick={closeMenu}>
                  Popular
                </a>
              </li>
              <li>
                <a href="#reviewsection" className="nav-link" onClick={closeMenu}>
                  Review
                </a>
              </li>
            </ul>
            <div className="absolute bottom-0 -right-10 opacity-90 lg:hidden">
              <img src={image1} alt="leaf1_image" className="w-32" />
            </div>
            <div className="absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden">
              <img src={image2} alt="leaf2_image" className="w-32" />
            </div>
          </div>

          <div
            className="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden"
            onClick={toggleMenu}
          >
            <i
              className={`${
                menuOpen ? "ri-close-line" : "ri-menu-4-line"
              }`}
              id="hamburger"
            ></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;