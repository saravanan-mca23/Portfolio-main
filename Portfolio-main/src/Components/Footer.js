import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";


const Footer = () => {
  return (
    <footer>
      <h4>Developed by Saravanan</h4>
      <h4>Copyright &copy; 2023 MS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/saravanan-mca23" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/saravanan-m-55b600299/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:yrsaravanan@gmail.com' target='_blank'><GrMail/></a>
      
      </div>
    </footer>
  )
}

export default Footer