import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    ProjectManagementDesc: "This is a project management app built with the MERN stack. It lets users create projects, add tasks, and manage teams. I built it to learn full-stack development and deployed it using GitHub and Render.",
    ProjectManagementGithub: "https://github.com/saravanan-mca23/PMS",
    ProjectManagementWebsite: "https://pmt-frontend-ccwi.onrender.com",

    AttendanceSystemDesc: "This is an attendance management system built with the MERN stack. It allows users to mark attendance, view records, and manage users. I created it to learn CRUD operations, authentication, and full-stack deployment using GitHub and Render.",
    AttendanceSystemGithub: "https://github.com/saravanan-mca23/Attendance-System",
    AttendanceSystemWebsite: "https://attend-q43v.onrender.com",

    MernAuthDesc: "This is a user authentication system built with the MERN stack. It handles user registration, login, and secure access using JWT. I developed it to learn authentication workflows and full-stack deployment with GitHub and Render.",
    MernAuthGithub: "https://github.com/saravanan-mca23/mern-auth-app",
    MernAuthWebsite: "https://mern-auth-app-frontend-rkic.onrender.com",

    PortfolioDesc: "This is a personal portfolio website built with React. It showcases my projects, skills, and contact information. I created it to practice React components, responsive design, and deployed it using GitHub Pages.",
    PortfolioGithub: "https://github.com/saravanan-mca23/Portfolio-main",
    PortfolioWebsite: "https://portfolio-4a1c.onrender.com",

  };

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + 'Github']}
          target='_blank'
          rel="noopener noreferrer"
        >
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <a
          href={desc[projectName + 'Website']}
          target='_blank'
          rel="noopener noreferrer"
        >
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
