import React from 'react'
import ProjectBox from './ProjectBox'
import '../Local/Css/Projects.css'
import Project from '../Local/Js/project.json'
import LinkLogo from './LinkLogo'

export default function Projects() {
  return (
    <div className='vipbox container shadoBox' id='projects'>
      <div className="projectBox">

        <ul className='heading'>
          <li className="headingTital">PROJECT</li>
          <li className="headingIcon" >
            <LinkLogo
              to={'https://github.com/vipin2526'}
              logoPath={"github.svg"}
              height={40}
              alt={'kho gaya hu mai'}
            />
          </li>
        </ul>


        <div className="row">
          {
            Project.map((e, index) => {
              return (
                <ProjectBox key={index}
                  project={e}
                />)
            })
          }
          {/* <button>See More</button> */}
        </div>


      </div>
    </div>
  )
}
