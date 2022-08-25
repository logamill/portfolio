import React, { useState } from "react";

const Resume = () => {

  return (
    <>
      <div className="lm_resume">
        <div className="lm_title">
          <div className="left">
            <span>Resume</span>
          </div>
        </div>
        <div className="dev_container">
          <h3 className="dev_name">Development </h3>
          <h5>Flatiron School, New York, NY</h5>
          <h6>April 2022 - July 2022</h6>
            </div>
            <div className="lm_resume_bullets">
              <p>
                15-week intensive software engineering bootcamp in the heart of Manhattan focused around building full-stack applications utilizing a Ruby on Rails back-end environment with React js for the front-end.
                As part of the program I attended lectures, completed individual and group programming assignments, code challenges and projects to demonstrate a comprehensive understanding of both theory and implementation necessary to become a software engineering professional. Selected to present project as well as mentor students following graduation at various open-house events.
              </p>
              <span>Projects:</span>
              <span className="project_headers">Spotifinder</span>
                <ul>Browse users and compare advanced Spotify analytics and top tracks/artists to see who is your closest music match!

                  <li>Utilized Spotify API and OmniAuth 2.0 to authenticate users and link their Spotify account to pull advanced analytics
                  </li>
                  <li>Designed and implemented formulas to parse data and assign numerical values to user’s analytical categories in order to present data and match users based on a percentage out of 100
                  </li>
                  <li>All aspects of project designed and implemented over a 3-week period</li>
                  <li>User data is persisted on the back-end in a Postgresql table once an account is linked in order to allow the user to access their data and account without having to keep signing in to Spotify</li>
                  <li>Implemented conditional rendering to SASS design to make application usable on all mobile devices
                  </li>
                </ul>
              <span className="project_headers">Carousel</span>
                <ul>App for professional photographers and artists to showcase their work to peers in a unique way

                  <li>Front-end focused website built in React with a Ruby on Rails back-end 
                  </li>
                  <li>Created and designed 3D projector-like wheel that allows users to scroll through images using only SASS and React
                  </li>
                  <li>Full authentication achieved through Bcrpyt and ActiveRecord session storage
                  </li>
                  <li>All data persisted on the back-end through Ruby on Rails and conditionally rendered in React utilizing hooks
                  </li>
                </ul>
                <span className="project_headers">≠ Uniqlo</span>
                <ul>E-commerce site built in the vein of popular sites like Urban Outfitters, American Appareal and (surprise, surprise) Uniqlo!
                  <li>Designed user interface with React and implemented Parallax library to achieve styling
                  </li>
                  <li>Called RESTful API endpoints while utilizing state and hooks to conditionally render data based on various categories to avoid forcing unneeded additional communication with server</li>
                </ul>
                </div>
                {/* END DEV */}
                <div className="work_container">
                  <h3 className="work_name">Work Experience</h3>
                  <h5>Sales Operations Specialist| Kraft Kennedy, New York, NY</h5>
                  <h6>Jan 2019 - Aug 2021</h6>
                </div>
                <div className="lm_resume_bullets">
                  <ul>
                    <li>
                      Worked with the sales team as a technical resource and expert to help to facilitate deals by meeting with COOs,
                      CFOs, and other company leaders of Fortune 500 and AMLaw 100 firms all across Manhattan
                    </li>
                    <li>
                      Lead Microsoft Gold Partnership Program and worked closely with Microsoft colleagues to validate offerings and
                      have them listed in various Microsoft affiliate marketplaces
                    </li>
                    <li>
                      Helped design systems in CRMs to allow for better data analysis and organization
                    </li>
                  </ul>
                  <h5>Technical Writer | Kraft Kennedy, New York, NY</h5>
                  <h6>Jan 2017 - Jan 2019</h6>
                </div>
                <div className="lm_resume_bullets">
                  <ul>
                    <li>
                      Wrote technical documentation for a variety of offerings such as Azure, SQL, AWS, Microsoft 365 and more in order
                      to streamline user experience and optimize workflow
                    </li>
                    <li>
                      Designed a template system for all RFP responses and proposals to streamline business and increase response
                      times 
                    </li>
                    <li>
                      Responded to RFP's from a variety of clients ranging from legal and financial to government 
                    </li>

                  </ul>
                  </div>
                  {/* END WORK */}
                  <div className="education_container">
                    <h3 className="work_name">Education</h3>
                    <h5>Cornell University</h5>
                    <h6>Python Programming Certificate</h6>
                    <h6>December 2021 - May 2022</h6>
                  </div>
                  <div className="lm_resume_bullets">
                    <p>Completed the following certifications in the top 90% of the class</p>
                    <ul>
                      <li>
                        Mastering Data Structures
                      </li>
                      <li>
                        Auditing Datasets
                      </li>
                    </ul>
                  </div>
                  <h5>Háskóli Íslands (University of Iceland)</h5>
                  <h6>Coursework completed towards Norse Studies Master of Arts</h6>
                  <h6>Fall 2020 - Fall 2021</h6>
                  <div className="lm_resume_bullets">
                    <p></p>
                    <ul>
                      <li>
                        Selected as part of a small group of international applicants to attend graduate program
                      </li>
                      <li>
                        Learned Icelandic and Old Norse as part of program in order to research old texts and primary materials
                      </li>
                    </ul>
                  </div>
                  
                  <h5>Pace University</h5>
                  <h6>Bachelor of Arts | History/English</h6>
                  <h6>Fall 2012 - Fall 2016</h6>
                  <div className="lm_resume_bullets">
                  <ul>
                    <li>
                      Graduated Magna Cum Laude 
                    </li>
                    <li>
                      Honors College Award Recipient
                    </li>
                    <li>
                      Trustee Recognition Award Recipient
                    </li>
                    <li>
                      Selected to help teach at Columbia University in 2016
                    </li>
                    <li>
                      Member of Robotics Club - Performed community service at different elementary and middle schools in Manhattan and Brooklyn to help students learn the basics of programming and robotics
                    </li>
                  </ul>
                  </div>
              </div>
    </>
  )
};

export default Resume;
