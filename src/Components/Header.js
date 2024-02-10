import React from 'react'
import '../Local/Css/Header.css'


export default function Header() {
  return (
    <div className='header'>
      <ul className='headerRoutes'>
        <li style={{ marginRight: 'auto' }}><a href="#home"> <img src="/Logo.png" alt="not found" height={40} /> </a></li>
        <li><a href="#skill">SKILL</a></li>
        <li><a href="#about">ABOUT ME</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#resume">RESUME</a></li>
      </ul>
    </div>
  )
}
