import React from 'react'
import '../Local/Css/HomePage.css'


export default function LandingPage() {
    return (
        <div className="container landingPage vipbox pb-3" id='home'>
            <div className="container-fluit landingPageContent">
                <div className="row h-100" >
                    <div className="col-6">
                        <div className="intro">
                            <div className="introName">Hi I'M VIPIN KUMAR KUSHWAHA</div>
                            <div className="introProfession">I'M A WEB DEVELOPER</div>
                            <div className="introDiscription">
                            I am a software engineering student specializing in web development, with a keen interest in designing both frontend and backend of websites using the MERN Stack.
                            </div>
                            <a  href='#projects' ><button className='viewProjects' >VIEW MY PORJECTS</button></a>
                            
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="myimage">   
                            <img src="/vippu.png" alt="not found" height={500} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
