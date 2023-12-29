import React from 'react'
import "./Footer.scss"
import { NavLink } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div>
                    Sahil Zore
                </div>
                <div className='footer-links'>
                    <NavLink>About</NavLink>
                    <NavLink>Portfolio</NavLink>
                    <NavLink>Contact Me</NavLink>
                </div>
                <div className='footer-icons'>
                    < CiLinkedin />
                    <FaGithub />
                    <FaDribbble />
                </div>
            </div>
            <div className='copyright'>
                <p className="center">
                    ©️ All Rights Reserved by | Sahil Zore
                </p>
            </div>
        </div>
    )
}

export default Footer
