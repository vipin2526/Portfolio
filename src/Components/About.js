import React from 'react'
import '../Local/Css/About.css'
import LinkLogo from './LinkLogo'

export default function About() {
  return (
    <div className='vipbox container shadoBox' id='about' >
      <div className="aboutBox">

        <ul className='heading'>
          <li className="headingTital">ABOUT ME</li>
        </ul>

        <div className="row ">
          <div className="aboutDiscription p-5 pt-0  text-center">
            Focusing on the MERN stack especially Backend and Cloud field. My proficiency in these technologies allows me to create modern, efficient, and responsive web applications. Additionally, I have a solid foundation in Data Structures and Algorithms (DSA), which helps me optimise code for performance. With a passion for staying updated with industry trends and a commitment to delivering high-quality software, I am well-equipped to contribute to your projects and help your team succeed.
          </div>
          <div className="col-7 outerLinkLogo">
            <LinkLogo
              logoPath="profileLogo/linkedin.svg"
              tital="LinkedIn"
              to="https://www.linkedin.com/in/xmartcoder"
            />
            <LinkLogo
              logoPath="profileLogo/github.svg"
              tital="GitHub"
              to="https://github.com/xmartcoder"
            />

            <LinkLogo
              logoPath="profileLogo/leetcode.svg"
              tital="LeetCode"
              to="https://leetcode.com/xmartcoder/"
            />
            <LinkLogo
              logoPath="profileLogo/hackerrank.svg"
              tital="HackerRank"
              to="https://www.hackerrank.com/profile/xmartcoder"
            />
          </div>
        </div>

        <ul className="connectHeading">
          <li className='headingTital fs-4 mt-4'>Connect To Me</li>
          <button >Mail Id:- xmartcoder@gmail.com</button>
          <button>Phone No:- 9140067270</button>
        </ul>


      </div>
    </div>
  )
}
