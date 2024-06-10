// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import { gsap } from "gsap";
import { Power3 } from "gsap/src/index";
import { Link } from "react-router-dom";

function Nav() {
  const rid = useRef(null);

  const [show, setShow] = useState(false);

  const display = () => {
    gsap.fromTo(
      [rid.current],
      { width: "0" },
      {
        width: "17rem",
        display: "block",
        duration: 1.5,
        ease: Power3.outIn,
        transformOrigin: "right",
        zIndex: 110,
        stagger: { amount: 1 },
      }
    );
  };
  const close = () => {
    gsap.fromTo(
      rid.current,
      { width: "17rem" },
      {
        width: "0",
        display: "none",
        duration: 1.5,
        ease: Power3.outIn,
        transformOrigin: "left",
        stagger: { amount: 1 },
      }
    );
  };
  // useEffect(() => {
  //   if (show === false) {
  //     gsap.fromTo(
  //       rid.current,
  //       { width: "17rem" },
  //       {
  //         width: "0",
  //         display: "none",
  //         duration: 1.5,
  //         ease: Power3.outIn,
  //         transformOrigin: "left",
  //         stagger: { amount: 1 },
  //       }
  //     );
  //   } else if (show === true) {
  //     gsap.fromTo(
  //       [rid.current],
  //       { width: "0" },
  //       {
  //         width: "17rem",
  //         display: "block",
  //         duration: 1.5,
  //         ease: Power3.outIn,
  //         transformOrigin: "right",
  //         zIndex: 110,
  //         stagger: { amount: 1 },
  //       }
  //     );
  //   }
  // }, []);

  return (
    <>
      <div className="main-nav">
        <div className="nav">
          <div className="mylogo">
            <img className="logoimg" src="assets/fin.png" alt="" />
            <div className="listz">
              <ul>
                <hr />
                <li>
                  {" "}
                  <Link to="/"> Home </Link>
                </li>
                <hr />
                <li>
                  <Link to="/about"> About </Link>
                </li>
                <hr />
                <li>
                  <Link to="/service"> Services </Link>
                </li>
                <hr />
                <li>
                  <Link to="/partner"> Parnertship </Link>
                </li>
                <hr />
                <li>
                  <Link to="/smartweb/contact"> Contact </Link>
                </li>
                <hr />
              </ul>
            </div>
          </div>
          <div className="listzin">
            <hr />
            <ul>
              <li>
                {" "}
                <Link to="/reg"> Help </Link>
              </li>
              <hr />
              <li>
                <Link to="/login"> Log in </Link>
              </li>
              <hr />
              <li className="sign-up-but">
                <Link to="/reg"> Sign up </Link>
              </li>
              <hr />
            </ul>
          </div>

          <div className="farbar" onClick={display}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="move">
        <ul className={show ? "ul" : "uls"} ref={rid} onMouseLeave={close}>
          <div className="lists">
            <div className="close" onClick={close}>
              X
            </div>
            <hr />
            <li>
              {" "}
              <Link to="/"> Home </Link>
            </li>
            <hr />
            <li>
              <Link to="/about"> About </Link>
            </li>
            <hr />
            <li>
              <Link to="/services"> Services </Link>
            </li>
            <hr />
            <li>
              <Link to="/contact"> Portfolio </Link>
            </li>
            <hr />
            <li>
              <Link to="/"> Partnership </Link>
            </li>
            <hr />
          </div>
        </ul>
      </div>
    </>
  );
}

export default Nav;
