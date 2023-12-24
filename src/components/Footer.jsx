import { Link } from "react-router-dom"
import Logo from "../images/logo.jpg"
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="" />
          </Link>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, unde! Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="footer__socials">
            <a href="https://linkedin.com/okolijerryneche" target="_blank" rel="noreferrer noopener">{<FaLinkedin/>}</a>
            <a href="https://twitter.com/okolijerryneche" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
            <a href="https://facebook.com/okolijerryneche" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
            <a href="https://instagram.com/okolijerryneche" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
          </div>
        </article>
        <article>
          <h4>PermaLinks</h4>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
          
        </article>
      </div>
      <div className="footer__copyright">
        <small>2023 Jerry<span>Codes</span> &copy; All rights reserved to <img src={Logo} alt="" className="footer__img"/></small>
      </div>
    </footer>
  )
}

export default Footer