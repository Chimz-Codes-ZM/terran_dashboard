import React from 'react'
import Layout from "./components/layouts/layout"
import Resume_component from './components/Resume_component/Resume_component'

const CV = () => {

    const resumeData = {
        country: 'Your Country',
        city: 'Your City',
        languages: ['English', 'Spanish'],
        education: [
          {
            degreeName: 'Your Degree',
            institution: 'Your University',
            yearStarted: 2015,
            yearFinished: 2019,
          },
          // Add more education entries if needed
        ],
        workExperience: [
          {
            position: 'Your Position',
            companyName: 'Company Name',
            yearStarted: 2019,
            yearFinished: 2021,
          },
          // Add more work experience entries if needed
        ],
        role: 'Your Role',
        experience: 5,
        bio: 'Your Bio',
        softSkills: ['Communication', 'Teamwork'],
        socialMediaLinks: [
          { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
          { name: 'Twitter', url: 'https://twitter.com/' },
          // Add more social media links if needed
        ],
      };
  return (
    <Layout>
        <Resume_component data={resumeData}/>
    </Layout>
    
  )
}

export default CV