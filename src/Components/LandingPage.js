import React, { useEffect, useRef } from 'react'
import '../Local/Css/HomePage.css'
import gsap from 'gsap'


export default function LandingPage() {
    let myImage = useRef(null)
    let intro = useRef(null)
    useEffect(() => {
        gsap.from(myImage, { x: '40%', duration: 3, opacity: 0 })
        gsap.from(intro, { x: '-40%', duration: 3, opacity: 0 })
    })
    return (
        <div className="container landingPage vipbox pb-3" id='home'>
            <div className="container-fluit landingPageContent">
                <div className="row h-100" >
                    <div className="col-md-6 outerIntroBox">
                        <div className="intro" ref={el => intro = el}>
                            <div className="introName">Hi I'M VIPIN KUMAR KUSHWAHA</div>
                            <div className="introProfession">I'M A WEB DEVELOPER</div>
                            <div className="introDiscription">
                                I am a software engineering student specializing in web development, with a keen interest in designing both frontend and backend of websites using the MERN Stack.
                            </div>
                            <a href='#projects' ><button className='viewProjects' >VIEW MY PORJECTS</button></a>

                        </div>
                    </div>
                    <div className="col-md-6 outerImageBox">
                        <div className="myimage" ref={el => myImage = el}>
                            <img src="vippu.png" alt="not found" height={500} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
