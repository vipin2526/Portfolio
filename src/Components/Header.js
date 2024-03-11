import React, { useState, useEffect, useRef } from 'react'
import '../Local/Css/Header.css'
import LinkLogo from './LinkLogo'
import gsap from 'gsap'


export default function Header() {
  const [theme, setTheme] = useState('dark');
  const changeTheme = () => {
    document.querySelector('.App').classList.remove(theme);
    if (theme === 'dark') {
      document.querySelector('.App').classList.add('light');
      setTheme('light')
    }
    else {
      document.querySelector('.App').classList.add('dark');
      setTheme('dark')
    }
  } 
  let headerli = useRef(null);
  useEffect(() => {
   gsap.from(headerli, { y: '-100%', duration: 1, ease: 'bounce', opacity:0 })
  })
  return (
    <div className='header' >
      <ul className='headerRoutes' ref={el=>headerli=el}>
        <li style={{ marginRight: 'auto' }}>
          <a href="#home"> <img src="Logo.png" alt="not found" height={40} /> </a>
        </li>
        <li><a href="#skill">SKILL</a></li>
        <li><a href="#about">ABOUT ME</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#resume">RESUME</a></li>
        <div onClick={changeTheme} >
          <LinkLogo
            logoPath={`${(theme === 'light') ? 'dark' : 'light'}.svg`}
          />
        </div>
      </ul>
    </div>
  )
}
