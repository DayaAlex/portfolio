import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/home.css'

function Home() {
  return (
    <div className='Home'>
      <div className='about'> 
      <h2> Hi, My Name is Daya </h2>
      <div className='prompt'>
        <p> M.Tech AI student looking for data science/software engineering Internships </p>
        <LinkedInIcon/>
        <EmailIcon/>
        <GitHubIcon/>
        </div>
      </div> 
      <div className='skills'> 
      <h1> Skills</h1>
      <ol className='list'>
        <li className='item'>
          <h2> Front-End</h2>
          <span> ReactJS</span>
        </li>
        <li className='item'>
          <h2> Back-End</h2>
          <span> MySQL</span>
        </li>
        <li className='item'>
          <h2> Languages</h2>
          <span> Python, C++</span>
        </li>
      </ol>
      
      
       
      </div>
    </div>
  )
}

export default Home