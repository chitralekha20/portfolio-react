import React from 'react'
import './Profile.css'
import girlimg from "../assets/Chitralekha.png"
import resume from "../assets/ChitralekhaCV.pdf"

const Profile = () => {
  return (
    <section className='profileContainer' id='profile'>
      <div className='profileLeft'>
        <div>
          <h1 className='Firstone'>FRONTEND</h1>
          <h1 className='letter'>DEVELOPER</h1>
        </div>
        <p className='Secondone'>
          Hi! I'm Chitralekha, a passionate and detail-oriented MCA graduate with a strong foundation in frontend development.
          Proficient in HTML, CSS, JavaScript, and modern frameworks like React.js,
          with a focus on building responsive and user-friendly web applications.
          A quick learner, eager to apply problem-solving skills and stay updated with the latest web development trends.
        </p>
        <a href={resume} target='_blank' className='cv-phone'>
        <button className='Thirdone'>
          Download My CV From here
        </button>
        </a>
      </div>
      <div className='imgone'>
        <img src={girlimg} alt="" />
      </div>
    </section>
  )
}

export default Profile