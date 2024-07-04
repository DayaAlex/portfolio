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
        <p> Aspiring M.Tech AI post-graduate eager to acquire industry-relevant skills and make
        meaningful contributions to both the organization and society. </p>
        <a href="https://www.linkedin.com/in/daya-alex-506ba4268/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon/>
        </a>
        <EmailIcon/>
        <a href="https://github.com/DayaAlex" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className='icon'/>
          </a>
        
        </div>
      </div> 
      <div className='skills'> 
      <h1> Skills</h1>
      <ol className='list'>
        <li className='item'>
            <h2> Deep Learning</h2>
            <span> PyTorch, PyTorch Lightning, WandB experiment tracking and hyperparameter tuning</span>
          </li>
        <li className='item'>
          <h2> Deployment Technology</h2>
          <span> ONNX, TensorRT, PyCuda, JetsonTX2, Qualcomm</span>
        </li>
        <li className='item'>
          <h2> Languages</h2>
          <span> Python, C++</span>
        </li>
        <li className='item'>
          <h2> Front-End</h2>
          <span> ReactJS, HTML, CSS</span>
        </li>
        <li className='item'>
          <h2> Back-End</h2>
          <span> MySQL, PHP</span>
        </li>
        
      </ol>
      
      
       
      </div>
    </div>
  )
}

export default Home