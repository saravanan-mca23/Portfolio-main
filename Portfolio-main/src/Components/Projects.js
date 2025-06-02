import React from 'react';
import ProjectBox from './ProjectBox';
import PMS from '../images/PMS.png';
import Attendance from '../images/Attendance.png';
import Auth from '../images/Auth.png';
import Portfolio from '../images/Portfolio.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={PMS} projectName="ProjectManagement" />
        <ProjectBox projectPhoto={Attendance} projectName="AttendanceSystem" />
        <ProjectBox projectPhoto={Auth} projectName="MernAuth" />
        <ProjectBox projectPhoto={Portfolio} projectName="Portfolio" />
       
       
        
      </div>

    </div>
  )
}

export default Projects