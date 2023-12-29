import React from 'react'
import "./About.scss"
import user1 from "../../assets/user1.png"
import user2 from "../../assets/user2.png"
import user3 from "../../assets/user3.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const About = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const users = [
        {
            image: user1,
            name: "Joe Will"
        },
        {
            image: user2,
            name: "Mat Harry"
        },
        {
            image: user3,
            name: "Steve Smith"
        },
    ]


    return (
        <div className='about container'>
            <h1 className="heading">What they Say <br />About Me?</h1>

            <Slider>

                {
                    users.map((e,i) => (
                        <div className="slide center" key={i}>
                            <div>
                            <img src={e.image} alt="" />
                            </div>
                            <h3>{e.name}</h3>
                            <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum qui incidunt <br /> aspernatur quos at quo doloribus ipsum deleniti ea cum!</small>
                        </div>
                    ))
                }



            </Slider>
        </div>
    )
}

export default About
