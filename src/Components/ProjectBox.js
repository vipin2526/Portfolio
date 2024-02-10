import React from 'react'

export default function ProjectBox({ project }) {
    return (
        <div className="container col-md-6 smallProjectBox mb-5">

            <div className="videoBox m-auto overflow-hidden ">
                {/* <img src="/agra.jpg" alt="" /> */}
            </div>
            <ul className='heading fs-5 m-0'>
                <li className="headingTital">{project.name}</li>
            </ul>

            <div className="discription text-center">
                <h6>{project.description}</h6>

                <div className="tech">
                    {project.technology.map((e, index) => {
                        return (
                            <button key={index}>{e}</button>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}
