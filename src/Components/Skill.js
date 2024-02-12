import React from 'react'
import LinkLogo from './LinkLogo'
import '../Local/Css/Skill.css'
import Skills from '../Local/Js/skill.json'

export default function Skill() {
    return (
        <div className='vipbox container shadoBox' id='skill'>
            <div className="skillBox">

                <ul className='heading'>
                    <li className="headingTital">KEY SKILL</li>
                </ul>

                {/* <div className="skillHeading col-md-4">BACKEND</div> */}

                <div className="row justify-content-center">
                    {
                        Skills.map((e, index) => {
                            return (
                                <div className="skillLogo">
                                    <LinkLogo
                                        key={index}
                                        logoPath={e.logoPath}
                                        tital={e.tital}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
