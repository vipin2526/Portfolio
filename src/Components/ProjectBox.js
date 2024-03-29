import React from 'react'
import LinkLogo from './LinkLogo'
import { motion } from 'framer-motion'
import { fadeIn } from '../Local/motion'

export default function ProjectBox({ project }) {
    return (
        <motion.div
            variants={fadeIn('up', 'tween', 0.15, .5)}
            initial='hidden'
            whileInView="show"
            className="container col-md-6 smallProjectBox mb-5 ">

            <div className="imageBox m-auto overflow-hidden"
                onClick={() => { if (project.live) window.open(project.live) }}>
                <img src={project.imagepath} alt="" className='h-100' />
            </div>

            <ul className='heading fs-5 m-0'>
                <li className="headingTital float-end">{project.name}</li>
                <li className="headingIcon">
                    <LinkLogo
                        to={project.code}
                        logoPath={"asset/code.svg"}
                        height={20}
                        alt={'code'}
                    />
                </li>
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
        </motion.div>
    )
}
