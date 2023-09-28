import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import pic from '../../images/pic.jpeg'

const Intro = () => {
  return (
    <section id="intro">
      <div className='introcontent'>
        <span className='hello'>Hello,</span><br/>
        <span className='introtext'>I'm<span className='introname'> Sravan</span><br/>Website Designer</span>
        <p className='intropara'>I am a skilled web designer with experience in creating visually appealing and user friendly website </p>
        <Link><button className='btn'><img src='https://uolcareers.co.uk/wp-content/uploads/HireMeLogo-300x130.png' className='btnimg'/></button></Link>

      </div>
      <img src={pic} alt='' className='pic'/>
    </section>

  )
}

export default Intro;