import React from 'react'
import  GitHubIcon  from '@material-ui/icons/GitHub';
import '../styles/footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='github'>
        <GitHubIcon />
        </div>
        <p> &copy; 2023 dayaalex</p>
    </div>
  )
}

export default Footer;