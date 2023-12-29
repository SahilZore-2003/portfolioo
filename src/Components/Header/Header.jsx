import React from 'react'
import me from "../../assets/me.png"
import "./Header.scss"
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa";

const Header = () => {
    return (
        <header className={`header`}>
            <div className="left">
                <img src={me} alt="" />
            </div>
            <div className="right">
                <div className='bio'>
                    <h1>
                        Sahil Zore
                    </h1>
                    <h3>Frontend Web Developer</h3>
                    <a>Download CV</a>
                </div>
                <div className="socials">
                    <a href="https://github.com/SahilZore-2003"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/sahil-zore-a58810246/"><CiLinkedin /></a>
                    <a href="https://sahilzore-2003.github.io/myportfolio"><FaDribbble /></a>
                </div>
            </div>
        </header>
    )
}

export default Header
