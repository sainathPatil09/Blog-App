import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className='mt-10 w-[70%] mx-auto'>
      <h1 className='text-5xl font-semibold '>About Me</h1>
      <div className='mt-5 flex flex-col gap-6 text-lg mb-5'>
        <div className='space-y-2'>
          <p className='text-lg' >Hello! I’m <span className='text-blue-500 font-semibold'>Sainath</span>, a passionate and dedicated Computer Science Engineering student with a strong foundation in web development, algorithms, and problem-solving. I enjoy working on innovative projects and learning new technologies to stay updated in the ever-evolving tech industry.</p>
          <p>also i'm 3-star coder on GeeksforGeeks with a contest rating of 1450+ on LeetCode, demonstrating my passion for coding and competitive programming.</p>
        </div>
        <div>
          <h2 className='text-3xl font-semibold mb-2'>Skills</h2>
          <div>
            <ul>
              <li>Programming Languages: Java, JavaScript, HTML, CSS</li>
              <li>Frameworks: React, Node.js, Express</li>
              <li>Tools: Git, MongoDB, Postman</li>
              <li>Soft Skills: Problem-solving, Teamwork, Communication, Time Management, Adaptability</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className='text-3xl font-semibold mb-2'>Projects</h2>
          <div>
            <ul>
              
              <li> <span className='font-semibold' >Shortest Path Visualizer: </span> A project demonstrating Dijkstra's algorithm, built using HTML, CSS, and JavaScript, that allows users to visualize the shortest path in a grid</li>
              <li> <span className='font-semibold' > Netflix Clone UI: </span> A front-end project replicating the UI of Netflix, showcasing proficiency in modern web development practices.</li>
              <li> <span className='font-semibold' >Password Management System:</span> A full-stack MERN application that allows users to save, update, and delete passwords securely.</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className='text-3xl font-semibold mb-2'>Exploring</h2>
          <div>
            <p>I’m currently expanding my knowledge in cloud computing, learning the basics of cloud infrastructure, services, and deployment models. My goal is to integrate cloud technologies into future projects to enhance scalability and performance.</p>

            <p>I’m always eager to explore new technologies, and I believe in continuous learning, embracing challenges that push my limits</p>
          </div>
        </div>

        <div>
          <h2 className='text-3xl font-semibold mb-2'>Connect with me</h2>
          <div className='space-y-4'>
            <p className='flex gap-5 items-center ml-8' ><span><FaLinkedinIn className='hover:text-blue-600' size={30} /></span> https://www.linkedin.com/in/sainath-patil-00644a252/</p>
            <p className='flex gap-5 items-center ml-8' ><span><FaXTwitter size={30} /></span> https://x.com/Sai_patil09</p>
            <p className='flex gap-5 items-center ml-8' ><span><FaGithub  size={30}/></span> https://github.com/sainathPatil09</p>

          </div>
        </div>

      </div>
    </div>
  )
}

export default About
