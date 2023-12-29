import React, { useRef, useState } from 'react'
import "./Services.scss"
import { TbTargetArrow } from "react-icons/tb";
import { FaPaintbrush } from "react-icons/fa6";
import { SiSquarespace } from "react-icons/si";
import { FaXmark } from "react-icons/fa6";


const Services = () => {

    const showBox = useRef(null)



    const services = [
        {
            id: 0,
            name: "Web Developer",
            icon: TbTargetArrow,
            desc: "Beatiful and elegant design with interfaces that are initiative efficent and pleasent to use for the user."
        },
        {
            id: 1,
            name: "Web Designer",
            icon: FaPaintbrush,
            desc: "Beatiful and elegant design with interfaces that are initiative efficent and pleasent to use for the user."
        },
        {
            id: 2,
            name: "Interfaces UI/UX",
            icon: SiSquarespace,
            desc: "Beatiful and elegant design with interfaces that are initiative efficent and pleasent to use for the user."
        },
    ]
    const [currentBox, setCurrentBox] = useState(2)
    const hideShowBox = () => {
        showBox.current.style.visibility = "hidden";

    }
    const showShowBox = (id) => {
        setCurrentBox(id)
        showBox.current.style.visibility = "visible";

    }

    return (
        <>
            <div className='services'>
                <h1 className="heading">The Services <br /> I Offer</h1>
                <div className="service-container">
                    {
                        services.map((e) => (
                            <div className="service-card" key={e.id}>
                                {e.icon()}
                                <h2>{e.name}</h2>
                                <p>{e.desc}</p>
                                <button onClick={() => showShowBox(e.id)}>Know More</button>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className="service-show-box" ref={showBox}>
                <div className="box">
                    <FaXmark className='cross' onClick={hideShowBox} />
                    <h3 className='center'>{services[currentBox].name}</h3>
                    <div className="description">
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, deserunt?
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, deserunt?
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, deserunt?
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, deserunt?
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
