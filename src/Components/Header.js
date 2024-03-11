import React, { useState } from 'react'
import '../Local/Css/Header.css'
import LinkLogo from './LinkLogo'

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


  return (
    <div className='header'>
      <ul className='headerRoutes'>
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
