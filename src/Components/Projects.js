import React from 'react'
import ProjectBox from './ProjectBox'
import '../Local/Css/Projects.css'
import Project from '../Local/Js/project.json'

export default function Projects() {
  return (
    <div className='vipbox container ' id='projects'>
      <div className="projectBox">

        <ul className='heading'>
          <li className="headingTital">PROJECT</li>
          <li className="headingIcon" onClick={() => (window.open('https://github.com/xmartcoder'))} >
            <img src="github.svg" alt="kho gaya hu mai..." height={40} />
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
