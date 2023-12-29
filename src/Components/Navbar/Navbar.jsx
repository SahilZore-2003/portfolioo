import React, { useState } from 'react'
import "./Navbar.scss"
import { NavLink,Link } from 'react-router-dom'
import { PiSquaresFourLight } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

    const [scroll, setScroll] = useState(false)
    const [navActive, setNavActive] = useState(false)

    window.addEventListener("scroll", () => {
        if (scrollY > 10) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    })


    return (
        <>

            <nav className={scroll ? ` scrolled` : ``}>
                <div className="left">
                    <h1>Sahil</h1>
                </div>
                <div className="right">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/about"}>About me</NavLink>
                    {/* <NavLink to={"/portfolio"}>Portfolio</NavLink> */}
                    <Link to={"/contact"} className={"contact"}>Contact me</Link>
                    {
                        navActive ? <RxCross2 onClick={() => setNavActive(false)} /> : <PiSquaresFourLight onClick={() => setNavActive(true)} />
                    }

                </div>
            </nav>
            <div className={navActive ? `mobile-nav active` : `mobile-nav`}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"about"}>About</NavLink>
                {/* <NavLink to={"portfolio"}>Portfolio</NavLink> */}
                <NavLink to={"contact"}>Contact</NavLink>
            </div>
        </>
    )
}

export default Navbar
