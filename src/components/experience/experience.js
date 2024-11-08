import * as React from "react"
import "./experience.scss"


const experienceData = [
  {
    "company": "University of Southern California - Viterbi School of Engineering",
    "url": "https://viterbischool.usc.edu/",
    "time": "Sep 2024 - Dec 2024",
    "position": "Course Producer: CSCI-572"
  },
  {
    "company": "Yahoo!",
    "url": "https://www.yahoo.com/",
    "time": "June 2024 - Aug 2024",
    "position": "Software Engineering Intern - II"
  },
  {
    "company": "UBS",
    "url": "https://www.ubs.com/",
    "time": "July 2021 - Oct 2022",
    "position": "Software Engineer"
  },
  {
    "company": "NICE Systems",
    "url": "https://www.nice.com/",
    "time": "Oct 2020 - Apr 2021",
    "position": "Software Engineer Intern"
  },
  {
    "company": "Persistent Systems",
    "url": "https://www.persistent.com/",
    "time": "May 2020 - July 2021",
    "position": "Software Engineer Intern"
  },
  {
    "company": "Mobinext Technologies",
    "url": "https://mobinexttech.com/",
    "time": "June 2019 - July 2019",
    "position": "Software Engineer Intern"
  },
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data) => (
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.company}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="job__position">{data.position}</div>
            </div>
          ))
        }
      </div>
    </div>
  </section>
)

export default Experience
