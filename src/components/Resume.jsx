import React, { useState } from "react";

const Resume = () => {

  return (
    <>
      <div className="lm-resume">
        <div className="dev-container">
          <h3 className="dev-name">Development </h3>
          <h5>Flatiron School, New York, NY</h5>
          <h6>April 2022 - July 2022</h6>
            </div>
            <div className="lm-resume-bullets">
              <p>
                Attended a 15-week intensive software engineering bootcamp in the heart of Manhattan focused on teaching a full-stack Ruby on Rails environment while utilizing React JS for the front-end.
                As part of the program I attended lectures, completed individual and group programming assignments, code challenges and projects to demonstrate a comprehensive understanding of both the theory and applications necessary to become a software engineering professional. Chosen to come and present project as well as mentor students following graduation at various open-house events.
              </p>
              <span>Projects:</span>
              <span className="project-headers">≠ Uniqlo</span>
                <ul>
                  <li>Application built in React with CSS and Bootstrap 
                  </li>
                  <li>E-Commerce website built with local API</li>
                  <li>Users can upload their own clothing to sell or browse other offerings by cateogory and favorite items they like</li>
                </ul>
              <span className="project-headers">Carousel</span>
                <ul>
                  <li>Front-end focused website built in React with a Ruby on Rails back-end 
                  </li>
                  <li>Photo/art sharing wesbite that aimed to utilize an old-fashioned projector-esque carousel in order to showcase various user-submitted works for other users to view and comment on</li>
                  <li>Full CRUD application with authorization and session controllers
                  </li>
                </ul>
              <span className="project-headers">Spotifinder</span>
                <ul>
                  <li>Full-stack application that allows users to log in and link their Spotify account in order to view their advanced listening analytics, browse their top songs and artists and compare their listening analytics with other users and see how they match based off a percentage.
                  </li>
                  <li>Authorization achieved with both Rails bcrypt and OAuth 2.0</li>
                  <li>All aspects of project designed and implemented over a 3-week period</li>
                  <li>User data is persisted on the back-end once an account is linked in order to allow the user to access their data and account without having to keep signing in to Spotify</li>
                </ul>
                </div>
                {/* END DEV */}
                <div className="work-container">
                  <h3 className="work-name">Work</h3>
                  <h5>Technical Writer | Kraft Kennedy, New York, NY</h5>
                  <h6>January 2017 - 2021</h6>
                </div>
                <div className="lm-resume-bullets">
                  <p>
                    Drafted and created pricing as well as legal contracts for law firms and global businesses worldwide. Met with COOs, CFOs, CEOs, and other company leaders of Fortune 500 and AMLaw 100 firms in order to establish relationships, discuss contracts and sign clients. Created a standardized contract template system in order to streamline business continuity as well as training documentation for employee on-boarding.
                  </p>
                  <ul>
                    <li>
                      Wrote technical documents on a variety of offerings such as Azure, SQL, AWS, Microsoft 365 and more
                    </li>
                    <li>
                      Worked with sales team in order to facilitate work-flow as a technical resource and expert 
                    </li>
                    <li>
                      Lead Microsoft Gold Partnership program to validate offerings and have them listed in Azure marketplace
                    </li>
                  </ul>
                  </div>
                  {/* END WORK */}
                  <div className="education-container">
                    <h3 className="work-name">Education</h3>
                    <h5>Cornell University</h5>
                    <h6>Python Programming Certificate</h6>
                    <h6>December 2021 - May 2022</h6>
                  </div>
                  <div className="lm-resume-bullets">
                    <p>Completed the following certifications in the top 90% of the class</p>
                    <ul>
                      <li>
                        Developed a currency coverter and controlled program flow
                      </li>
                      <li>
                        Mastering Data Structures
                      </li>
                      <li>
                        Auditing Datasets
                      </li>
                    </ul>
                  </div>
                  <h5>Háskóli Íslands (University of Iceland)</h5>
                  <h6>Nordic Studies Graduate Program</h6>
                  <h6>Fall 2020 - Fall 2021</h6>
                  <div className="lm-resume-bullets">
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
                  <div className="lm-resume-bullets">
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
