import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MobileNavBarNotLoggedIn from "./components/mobile-nav-bar-not-logged-in/MobileNavBarNotLoggedIn";
import MobileNavBarLoggedIn from "./components/mobile-nav-bar-logged-in/MobileNavBarLoggedIn";

function MobileNavBar() {
  const [hide, setHide] = useState(true);
  const userState = useSelector((state: any) => state.userReducer);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down show the navbar
        setHide(false);
      } else {
        // if scroll up hide the navbar
        setHide(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <nav
      className={`fixed w-full left-0 bottom-0 bg-white z-50 md:hidden border-t border-gray-400 mobile-nav transition-all duration-400 ease-in origin-bottom ${
        hide ? "translate-y-96" : "translate-y-0"
      }`}
    >
      {userState.userInfo ? (
        <MobileNavBarLoggedIn />
      ) : (
        <MobileNavBarNotLoggedIn />
      )}
    </nav>
  );
}

export default MobileNavBar;
