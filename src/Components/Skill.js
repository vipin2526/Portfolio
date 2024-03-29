import React, { useEffect } from 'react'
import LinkLogo from './LinkLogo'
import '../Local/Css/Skill.css'
import Skills from '../Local/Js/skill.json'
import {motion} from 'framer-motion';
import { zoomIn } from '../Local/motion';



export default function Skill() {
    useEffect(() => {
           console.log("hii");
    })

    return (
        <motion.div 
        variants={zoomIn(0.3,1)}
        initial='hidden'
        whileInView="show"
        // viewport={}
        className='vipbox container shadoBox' id='skill'>
            <div className="skillBox">

                <ul className='heading'>
                    <li className="headingTital">KEY SKILL</li>
                </ul>

                {/* <div className="skillHeading col-md-4">BACKEND</div> */}
                <div className="row justify-content-center">
                    {
                        Skills.map((e, index) => {
                            return (
                                <motion.div variants={zoomIn(index/5,.2)} className="skillLogo" key={index}>
                                    <LinkLogo
                                        logoPath={e.logoPath}
                                        tital={e.tital}
                                    />
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
}
