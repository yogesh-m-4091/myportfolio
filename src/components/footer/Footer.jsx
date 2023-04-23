import React from 'react'
import "./footer.css"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineFacebook} from "react-icons/ai"


const Footer = () => {
  return (
   <footer>
    <a href="#" className="footer__logo">

    </a>
     <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>

      <li><a href="#experience">Experience</a></li>
      <li><a href="#hobbies">Hobbies</a></li>
      <li><a href="#experience">Portfolio</a></li>


     </ul>
     <div className="footer__socials">
      <a href="https://instagram.com/magadum_yogi?igshid=NzMyMjgxZWIzNw==" target='_blank'><AiOutlineInstagram/></a>
      <a href="https://www.facebook.com/yogi.magdum"  target='_blank'><AiOutlineFacebook/></a>
     </div>

    <div className="footer__copyright">
      <small>&copy; YOGI portfolio. All rights reserved.  </small>
    </div>
   </footer>
  )
}

export default Footer