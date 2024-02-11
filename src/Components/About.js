import React from 'react'
import ResumeButton from './ResumeButton'

const About = () => {
  return (
    <>
        <div className='about_heading'>ABOUT ME</div>
        <div className='about_info'>
          <div className='about_intro'>
            <div className='about_intro_img'>
              <img src='https://avatars.githubusercontent.com/u/26377874?v=4' alt='profile_image'></img>
              <div className='profile_name'>UI Developer <br/> <span>Neeraj Chauhan</span></div>
            </div>
            <div className='about_intro_desc'>
              <div>Greetings! I am Neeraj Chauhan, a dedicated frontend developer located in India. 
            Armed with 1.5+ years of proficiency in HTML, CSS, JavaScript, and React, I am adept at delivering top-notch web solutions. 
            My skill set includes executing impactful A/B tests with tools like 
            Optimizely, Convert, Monetate, Webtrends, Maxymiser, and Google Optimize, leading to notable enhancements in conversion rates and revenue growth.</div>
              <ResumeButton/>
            </div>
          </div>
          <div className='about_personal'>
            <h2>PERSONAL INFORMATION</h2>
            <ul>
              <li>
                <div className='label'>Name</div>
                <div className='name_text'>Neeraj Chauhan</div>
              </li>
              <li>
                <div className='label'>Location</div>
                <div className='location_text'>India</div>
              </li>
              <li>
                <div className='label'>Language</div>
                <div className='language_text'>English/Hindi</div>
              </li>
            </ul>
          </div>
          <div className='about_exp'>
            <h2>EXPERIENCE</h2>
            <ul>
              <li>
                <div className='label'>UI Developer <br/> <span>Optiphoenix</span></div>
                <div className='exp_text'>2022-Present</div>
              </li>
            </ul>
          </div>
          <div className='about_skills'>
            <h2>SKILLS</h2>
            <ul>
              <li>
                <div className='label'>HTML</div>
                <div className='skill_tape'>
                  <div className='skill_fill_html'></div>
                  <div className='skill_blank'></div>
                </div>
              </li>
              <li>
                <div className='label'>CSS</div>
                <div className='skill_tape'>
                  <div className='skill_fill_css'></div>
                  <div className='skill_blank'></div>
                </div>
              </li>
              <li>
                <div className='label'>Javascript</div>
                <div className='skill_tape'>
                  <div className='skill_fill_js'></div>
                  <div className='skill_blank'></div>
                </div>
              </li>
              <li>
                <div className='label'>React</div>
                <div className='skill_tape'>
                  <div className='skill_fill_react'></div>
                  <div className='skill_blank'></div>
                </div>
              </li>
              <li>
                <div className='label'>Graphql</div>
                <div className='skill_tape'>
                  <div className='skill_fill_graphql'></div>
                  <div className='skill_blank'></div>
                </div>
              </li>
              <li>
                <div className='label'>Git</div>
                <div className='skill_tape'>
                  <div className='skill_fill_git'></div>
                  <div className='skill_blank'></div>
                </div>
              </li>
              <li>
                <div className='label'>SEO</div>
                <div className='skill_tape'>
                  <div className='skill_fill_seo'></div>
                  <div className='skill_blank'></div>
                </div>
              </li>
              <li>
                <div className='label'>Responsive Design</div>
                <div className='skill_tape'>
                  <div className='skill_fill_responsive'></div>
                  <div className='skill_blank'></div>
                </div>
              </li>
              <li>
                <div className='label'>Trello/Clickup</div>
                <div className='skill_tape'>
                  <div className='skill_fill_trello'></div>
                  <div className='skill_blank'></div>
                </div>
              </li>
              <li>
                <div className='label'>Time Management</div>
                <div className='skill_tape'>
                  <div className='skill_fill_time'></div>
                  <div className='skill_blank'></div>
                </div>
              </li>
            </ul>
          </div>
          <div className='about_studies'>
            <h2>STUDIES</h2>
            <ul>
              <li>
                <div className='label'>INFORMATION TECHNOLOGY <br/> <span>IIIT SONEPAT</span></div>
                <div className='studies_text'>2016-2020</div>
              </li>
            </ul>
          </div>
        </div>
    </>

  )
}

export default About