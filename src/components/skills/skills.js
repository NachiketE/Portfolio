import * as React from "react"
import "./skills.scss"

const skillsData = {
  "languagesTitle": "Languages",
  "languages": ["Java", "Python", "C++", "SQL", "Javascript", "Typescript", "Swift", "HTML/CSS"],
  "frameworksTitle": "Web Development/iOS",
  "frameworks": ["Springboot", "Angular", "Django", "Flask", "Node", "Express", "SwiftUI", "Micronaut", "RESTful APIs", "GraphQL"],
  "toolsTitle": "Data Engineering",
  "tools": ["ETL", "Snowflake", "MapReduce", "PySpark", "Hadoop", "MySQL", "MongoDB", "PostgreSQL"],
  "designTitle": "Cloud & Devops",
  "design": ["AWS", "GCP", "Gitlab: CI/ CD", "Docker", "Kubernetes", "HelmCharts", "Terraform"],
  "dbTitle": "Database",
  "db": ["MySQL", "MongoDB", "PostgreSQL"],
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.languagesTitle}</div>
          <ul>
            {skillsData.languages.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.frameworksTitle}</div>
          <ul>
            {skillsData.frameworks.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.toolsTitle}</div>
          <ul>
            {skillsData.tools.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.designTitle}</div>
          <ul>
            {skillsData.design.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        {/* <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.dbTitle}</div>
          <ul>
            {skillsData.design.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div> */}
      </div>
    </div>
  </section>
)

export default Skills
