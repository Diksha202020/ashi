import React from 'react'
import './intro.css';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';
// import LinkedIn from '../../assets/linkedin.png';
// import GitHub from '../../assets/github.png';

function Intro() {
  const newTab=url=>{
    window.open(url)
}
  return (
    <section id='intro'>
      {/* <a href="https://www.linkedin.com/in/diksha-pandey-34814a226"><img src={LinkedIn} alt='linkedin' className='linkedinImg' onClick={()=>newTab('https://www.linkedin.com/in/diksha-pandey-34814a226')}/></a><br/>
      <a href="https://github.com/Deeksha-20pandey/Diksha20pandey"><img src={GitHub} alt='github' className='githubImg' onClick={()=>newTab('https://github.com/Deeksha-20pandey/Diksha20pandey')}/></a> */}
      
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introtext'>I'm <span className='introName'>Diksha Pandey</span> <br/>Full-Stack Developer</span>
            <p className='introPara'>I am a dedicated and versatile Full-Stack Developer with a passion <br/>for creating dynamic and innovative web applications. With a  <br/>solid foundation in both front-end and back-end technologies,  <br/>I bring a holistic approach to web development. My journey <br/> in the world of coding has equipped me with a diverse skill <br/> set that allows me to design, build, and maintain robust <br/> and user-friendly web solutions.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg' />Hire me</button></Link>
        </div>
        {/* <img src={bg} alt='Profile' className='bg'/> */}
    </section>
  )
}

export default Intro
