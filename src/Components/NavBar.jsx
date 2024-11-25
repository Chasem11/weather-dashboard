import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import "../styles/NavBar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar className={scrolled ? "scrolled" : ""}>
      <Navbar.Brand href="/">
        <img src="https://img.icons8.com/?size=100&id=t5K2CR8feVdX&format=png&color=000000" alt="Logo" />
      </Navbar.Brand>
    </Navbar>
  );
}

export default NavBar;
