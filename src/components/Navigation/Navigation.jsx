import logo from "../../assets/images/logoWhite.png";
import style from "./Navigation.module.css";
import Socials from "../Socials/Socials";
import { useState } from "react";
import { Link } from "react-router-dom";

import useBodyScrollLock from "../../hooks/useBodyScrollLock";

export default function Navigation() {
  const [navActivated, activateNav] = useState(false);

  useBodyScrollLock(navActivated);

  function handleNav() {
    activateNav((prev) => !prev);
  }
  function NavigationLink({ path, name }) {
    return (
      <Link className={style.navigationLink} onClick={handleNav} to={path}>
        {" "}
        <svg
          height="30px"
          width="30px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          <path
            fill="#d63737"
            d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15
	c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422
	C15.172,39.813,15.172,40.446,15.563,40.836z"
          />
        </svg>
        {name}
      </Link>
    );
  }

  return (
    <>
      <nav aria-label="Navigation">
        <Link to="/" className="logo">
          <img src={logo} alt="AURA Homepage" />
        </Link>
        <button
          onClick={handleNav}
          className={style.hambi}
          aria-expanded={navActivated}
          aria-label="Toggle Navigation Menu"
        >
          <div
            className={
              navActivated ? `${style.hambiUp} ${style.active}` : style.hambiUp
            }
          ></div>
          <div
            className={
              navActivated
                ? `${style.hambiDown} ${style.active}`
                : style.hambiDown
            }
          ></div>
        </button>
      </nav>
      <div
        aria-hidden={!navActivated}
        className={
          navActivated ? `${style.backdrop} ${style.active}` : style.backdrop
        }
      >
        <div className={style.navigation}>
          <div className={style.links}>
            <NavigationLink path="/" name="Home" />
            <NavigationLink path="/shop" name="Shop" />
            <NavigationLink path="/journal" name="Journal" />
          </div>
          <div className={style.socials}>
            <Socials />
            <p>© 2026 AURA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
