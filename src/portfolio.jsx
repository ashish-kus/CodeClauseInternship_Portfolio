import React from "react";
import "./portfolio.css"

const Portfolio = () => {
  const YourDegree = "Int B.Tech + M.Tech CSE";
  const UniversityName = "Gautam Buddha University";
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <header>
        <div className="container">
          <h1>Ashish Kushwaha</h1>
          <h2>Unveiling Innovation Through Lines of Code:
            <br />Embark on a Journey of Creativity and Precision</h2>
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects/Works</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#education">Experience</a>
          </li>
          <li>
            <a href="#awards">Awards</a>
          </li>
          <li><a href="#connect">Connect</a></li>
          <li>
            <a href="#connect">Resume</a>
          </li>
        </ul>
      </nav>

      <main id="main" tabIndex="-1">
        <div className="container">
          <article id="about" className="about">
            <section className="container">
              <h2>Hello,</h2>
              <p>
                Hey there! I'm Ashish Kushwaha, a computer science enthusiast driven by curiosity
                and a passion for problem-solving. My journey into the world of technology started
                early, and I've been captivated ever since. With a background in, I've immersed
                myself in various programming languages and methodologies.
              </p>
              <p>
              </p>
              <blockquote>
                <p>
                  When I'm not coding, you'll find me making art and painting, which adds a unique
                  dimension to my technical skills.
                </p>
              </blockquote>
              <p>
                I graduated in <strong> {YourDegree} </strong> from <strong>{UniversityName}</strong>, where I honed my skills and learned to collaborate effectively. Moving forward, I'm committed to pushing my boundaries, embracing emerging technologies, and giving back to the tech community through open-source contributions and knowledge-sharing.
              </p>

              <p>Explore my portfolio to witness my dedication to innovation and problem-solving. Thanks for joining me on this exciting journey!</p>
            </section>
          </article>

          <article id="skills" className="about">
            <section className="container ">
              <h2>Skills Under the Spotlight</h2>
              <p>
                These skills form the foundation of my technical prowess, enabling me to tackle
                complex challenges and create innovative solutions. My versatile skill set
                empowers me to contribute effectively in various domains of computer science.
              </p>
              <p>Some of my skills include:</p>
              <ul>
                <li>Data Structures & Algorithms</li>
                <li>Object-Oriented Programming</li>
                <li>Machine Learning</li>
                <li>Artificial Intelligence</li>
                <li>Database Design & Management</li>
                <li>Web Development (HTML, CSS, JavaScript)</li>
                <li>Software Development Life Cycle</li>
                <li>Version Control (Git)</li>
                <li>Network Security</li>
                <li>Operating Systems</li>
                <li>Cloud Computing</li>
                <li>Big Data Analytics</li>
                <li>Cryptography</li>
                <li>Parallel and Distributed Computing</li>
                <li>Computer Graphics</li>
                <li>Computer Vision</li>
                <li>Natural Language Processing</li>
                <li>UI/UX Design</li>              </ul>
              <p>
                Driven by a passion for innovation, my programming language expertise empowers me to transform ideas into functional, elegant solutions.              </p>
            </section>
          </article>

          <article>

            <aside id="projects" >
              <div className="container">
                <h2>Projects and Works</h2>
                <p>Explore my portfolio of diverse projects, each a testament to my passion for innovation and problem-solving. From e-commerce platforms to data visualization apps, witness the fusion of creativity and code in action.</p>
                <ul className="features">
                  <li>
                    <span>
                      <a href="#">TaskDiery<span aria-hidden="true"></span></a>
                      <span>Shell script</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#" >Dotfiles<span aria-hidden="true"></span></a>
                      <span>some desc</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#">Batfetch<span aria-hidden="true"></span></a>
                      <span>by Vinícius Philot</span>
                    </span>
                  </li>
                </ul>

                <a href="#" className="link-allstyles">View All Projects</a>
              </div>
            </aside>
          </article>

          <article id="Experience">
            <h2> Working Experience,</h2>
            <h3 class="title">Web Development Intern, Sapne NGO. <span class="float_right">22/11/2021</span></h3>
            <p>Sapne offer you an internship as lead position in our Web Designing department<br />
              Key responsibilities of your role include but are not limited to:<br />
              - Maintaining the website of SAPNE<br />
              - Updating it regularly with new events<br />
              - Helping with the newsletter</p><br />

            <h3 class="title">Website Development and Administration, <span class="float_right">01/11/2022</span><a
              href="http://smdhm.in/">SMDHM.</a> </h3>
            <p>Hired as a project based intern in web Development team at Society of Menstrual Disorder and Hygiene.<br />
              Held key responsibility to research, develop, and deploy a website for the company. Updated and maintained
              <br />
              the website’s Sales section through documents provided routinely via email.
            </p>

          </article>

          <article>
            <section class="education" id="education">
              <h2> Education,</h2>
              <h3 class="title">Undergraduate, Intigrated Computer Science (B.Tech + M.Tech).* <span class="float_right">*
                18/07/2020</span></h3>
              <p>Gautam Buddha University, Greater Noida, UP, 201312.<br />
                <i> Concentration in Object Oriented Programming, Web Development, and Mathematics.</i>
              </p>
              <h3 class="title">Higher Secondary School(12th)<span class="float_right">18/03/2019</span></h3>
              <p>Narayana IIT Academy, Adibatla, Telangana, 501510 <br />
                <i> Science (Physics, Chemistry and Mathematics) as their main subjects.</i>
              </p>
            </section>
          </article>

          <article id="awards">
            <h2><span class="yellow">##</span> Awards and Honors,
            </h2>
            <div id="page" class="o-page">
              <section class="o-main-section">
                <div class="c-article">
                  <div class="c-article__link">
                    <div>
                      <h3 class=" title">Completed internship in web development at SMDHM, </h3>
                      <div class="c-article__content">
                        Worked on a project titled Project Saathi. The aim of this project was to structure the design from UI
                        to core bottom and deploy the website. </div>
                    </div>
                    <div class="c-article__img-wrapper">
                      <img class="c-article__img" src="./assets/achievments/Certificate Of Appreciation.png"
                        alt="Ink transition with PNG sprite" />
                    </div>
                  </div>
                </div>
                <div class="c-article">
                  <div class="c-article__link" href="#">
                    <div>
                      <h3 class=" title">Responsive Mondrian art with CSS grid</h3>
                      <div class="c-article__content">
                        It was an honor to be part of INDIA in UNESCO -INDIA-AFRICA-HACKATHON-2022. An elated experience
                        working with Ministry of Education, Ministry of External Affairs, AICT, EdCIL and Moe's Inovation
                        Cell.
                      </div>
                    </div>
                    <div class="c-article__img-wrapper">
                      <img class="c-article__img" src="./assets/achievments/UNESCO.jpg"
                        alt="Responsive Mondrian art with CSS grid" />
                    </div>
                  </div>
                </div>
              </section>
            </div>

          </article>
          <article id="connect">
            <section className="container">
              <h2>Connect</h2>
              <p>Have a question, a project idea, or just want to say hello? I'd love to hear from you! <br /><br /> Feel free to reach out using the contact information below or through the provided form. Let's connect and explore the possibilities of collaboration in the world of technology.</p>
            </section>
            <footer id="files">
              <div className="container">
                <h3>Source Files</h3>
                <a href="#" className="link-downloadcss" download>Download CV</a>
                <a href="#" className="link-downloadhtml" download>Visite Website</a>
                <a href="#" className="link-codepen" download>Connect</a>
              </div>
            </footer>
          </article>
        </div>
      </main >
      <aside className="profile" aria-labelledby="profile-title">
        <div className="container">
          <h4 id="profile-title">Currently Status </h4>
          <ul>
            <li className="profile-title">
              <span>Title:</span>
              <span> Student</span></li>
            <li className="profile-author">
              <span>phone:</span>
              <span>&5525874187</span></li>
            <li className="profile-twitter">
              <span>Maiil:</span>
              <span>
                <a href="#"><br />ashish.kus2408@gmail.com</a>
              </span>
            </li>
            <li className="profile-website">
              <span>Website:</span>
              <span>
                <a href="#">nandu.co</a>
              </span>
            </li>
          </ul>
        </div>
      </aside>


      <footer className="page-footer">
        <div className="container">
          <p>
            Created and maintained by
            <a href="#">Ashish Kushwaha</a>
          </p>
          <ul>
            <li>
              <a href="#" className="link-twittercontact">Contact on socials</a>
            </li>
            <li>
              <a href="https://github.com" className="link-github">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                  <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                </svg>
                Visit on Github</a>
            </li>
            <li>
              <a href="#" className="link-rss">RSS Feed</a>
            </li>
          </ul>
          <p>
            Made with love and creative mind, under general poliecy and licenses
          </p>
        </div>
      </footer>
    </>
  )
}


export default Portfolio;
