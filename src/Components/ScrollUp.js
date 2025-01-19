import React, { useEffect } from 'react';

function ScrollUp() {
  const scrollHeader = () => {
    const header = document.getElementById("navbar");
    if (window.scrollY >= 50) {
      header.classList.add("border-b", "border-yellow-500");
    } else {
      header.classList.remove("border-b", "border-yellow-500");
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader); // Cleanup event listener
    };
  }, []);

  return (
    <>
      <a
        href="#"
        className="fixed right-4 bottom-4 bg-yellow-500 shadow-sm inline-block px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50
        hover:-translate-y-1 duration-300"
        id="scroll-up"
        onClick={handleScrollToTop}
      >
        <i className="ri-arrow-up-line"></i>
      </a>
    </>
  );
}

export default ScrollUp;
