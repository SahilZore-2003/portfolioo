import React from 'react'
import "./Work.scss"
import work1 from "../../assets/work1.png"
import work2 from "../../assets/work2.png"
import work3 from "../../assets/work3.png"
import work4 from "../../assets/work4.png"
import work5 from "../../assets/work5.png"


const images = [work1,work2,work3,work4,work5,work2]

const Work = () => {
  return (
    <div className='work container'>
      <div className="heading">My Most <br />Recent Work</div>
      <div className="project-container">
        {
            images.map((e,i)=>{
                return  <div className="project" key={i}>

                <div className='img-con'><img src={e} alt="" /></div>
                <h2>Creative Website</h2>
                <p>Website Design</p>
            </div>
            })
        }
       
      </div>
    </div>
  )
}

export default Work
