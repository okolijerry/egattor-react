import { useState } from "react"

import {Link, NavLink} from "react-router-dom"


import Logo from "../images/logo.jpg"
import { links } from "../data"
import {IoMdMenu} from "react-icons/io"
import {MdOutlineClose} from "react-icons/md"

import "./navbar.css"


const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);



  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => isNavShowing (false)}>
          <img src={Logo} alt="Nav Logo" className="bg-logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
          {
            links.map(({name, path}, index) => {
              return(
                <li key={index}>
                  <NavLink to={path} className={({isActive}) => isActive ? "active-nav" : ""}
                  onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
       {/*<button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>*/}
       <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ? <MdOutlineClose/> : <IoMdMenu/>
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar