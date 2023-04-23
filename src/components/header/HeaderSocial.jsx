import React from 'react'
import {CiLinkedin} from "react-icons/ci"
import {BsGithub} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/yogesh-magadum-3729651a0" target='_blank'><CiLinkedin/> </a>
        <a href="https://github.com/yogesh-m-4091" target='_blank'> <BsGithub />  </a>
        <a href="https://instagram.com/magadum_yogi?igshid=NzMyMjgxZWIzNw==" target='_blank'>< AiOutlineInstagram /></a>
    </div>
  )
}

export default HeaderSocial