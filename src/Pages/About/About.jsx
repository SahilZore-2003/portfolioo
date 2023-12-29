import React from 'react'
import "./About.scss"
import me from "../../assets/me.png"
import { NavLink } from 'react-router-dom'
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import bs from "../../assets/bs.png"
import jq from "../../assets/jq.png"
import react from "../../assets/react.png"
import sass from "../../assets/sass.png"

const About = () => {
    return (
        <div className='about-page container'>
            <h1 className='heading'>My Personal <br />Information</h1>

            <div className="content">
                <div className="left">
                    <div className='img-con'> <img src={me} alt="" /></div>
                </div>
                <div className="right">
                    <h1>Sahil Zore</h1>
                    <p>Frontend Web Developer</p>
                    <small>
                        Passinating about create responsive and beatiful <br /><span>web pages </span> with using technologies like<span> <br /> HTML CSS JS and React.</span>
                    </small>
                    <div>

                    <NavLink to={"/contact"} >Contact Me</NavLink>
                    </div>

                    <p className='skills'>My Skills Are</p>
                    <div className="skills-logo">
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                        <img src={react} alt="" />
                        <img src={bs} alt="" />
                        <img src={jq} alt="" />
                        <img src={sass} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
