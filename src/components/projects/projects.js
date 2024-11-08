import * as React from "react"
import "./projects.scss"

const projectsData = [
  {
    "name": "New York Times WebApp",
    "url": "https://www.youtube.com/watch?v=nlBmdORVEr8",
    "description": [
      "A multi-page application, built with Node.js and Express, brings the New York Times' vast information to life with EJS-powered dynamic rendering and a fully responsive, Bootstrap-integrated design—optimized for both desktop and mobile users.",
      "The application offers multiple API endpoints, enabling users to explore various New York Times data, including archived articles, top stories, and book reviews.",
      "With Git for version control and a Node.js architecture, this project ensures stable performance and maintainability, allowing users to interact with a range of New York Times resources effortlessly."  
    ],
    "githubUrl": "https://github.com/NachiketE/NYTInfoExtracter",
    "used": [
      {"thing": "Node.js"},
      {"thing": "Express"},
      {"thing": "EJS"},
      {"thing": "Bootstrap"},
      {"thing": "JavaScript"},
      {"thing": "REST APIs"},
    ]
  },
  {
    "name": "Ebay MEAN Stack WebApp",
    "description": [
      "Designed and implemented a MEAN Stack WebApp leveraging eBay APIs to empower users in searching for products, accessing product information, managing a wishlist feature, and seamlessly sharing product details on Facebook.",
      "Implemented user authentication, recipe creation and editing functionalities, and a personalized recipe feed to enhance user engagement and experience.",
      "Engineered the backend infrastructure of the application using Node.js, Express.js, MongoDB and Ebay APIs. The backend infrastructure is hosted on GCP."      
    ],
    "used": [
      {"thing": "Angular"},
      {"thing": "Node.js"},
      {"thing": "Express"},
      {"thing": "MongoDB"},
      {"thing": "Flask"},
      {"thing": "GCP"},
      {"thing": "REST APIs"},
    ]
  },
  {
    "name": "Ebay iOS Mobile App",
    "url": "https://youtu.be/y8qOF-Cdi_s?si=CN_bbK0sTR7hyJyO",
    "description": [
      "Designed and implemented an iOS application for leveraging eBay APIs to empower users in searching for products, accessing product information, managing a wishlist feature, and seamlessly sharing product details on Facebook.",
      "Crafted a visually appealing user interface for the iOS application using SwiftUI, incorporating splash screen, NavigationBar, TabView, ScrollView, Carousels, Page control, Toasts and symbols from SF Symbols for an enhanced visual experience.",
      "Utilized Alamofire to facilitate asynchronous HTTP requests in the development of the application.",
      "Used SwiftJSON for reading, parsing, and managing JSON data within the application.",
    ],
    "used": [
      {"thing": "Swift"},
      {"thing": "SwiftUI"},
      {"thing": "Alamofire"},
      {"thing": "SwiftJSON"},
    ]
  },
  {
    "name": "Music Playlist Management System",
    "url": "https://youtu.be/pyy_JM3lvRM",
    "githubUrl": "https://github.com/NachiketE/MusicApp",
    "description": [
      "Developed a web-based music management system using Django as the backend web framework, with two distinct user roles: Music Admins and Music Listeners.",
      "Music Admins have unrestricted access to the system, allowing them to manage music and user databases by adding or deleting music and viewing or banning users.",
      "Music Listeners can utilize the web application to search, create, and manage playlists, adding or removing music as desired.",
      "To handle large volumes of data and database operations: a distributed database system employing MongoDB and a secure hash function for efficient data storage and retrieval is implemented, ensuring scalability and performance.",
    ],
    "used": [
      {"thing": "Django"},
      {"thing": "MongoDB"},
      {"thing": "Bootstrap"},
      {"thing": "HTML/CSS"},
      {"thing": "JavaScript"},
    ]
  },
  {
    "name": "DBCon",
    "description": [
      "Developed a tool for effective transformation of existing tabular database systems to graph databases.",
      "This project enables enhanced decision making for organisations and reduces the cost of data operations, management and processing.",
    ],
    "used": [
      {"thing": "Python"},
      {"thing": "SQL"},
      {"thing": "MongoDB"},
      {"thing": "Neo4J"},
    ]
  },
]


const Projects = () => {
  return (
    <section className="section other-projects">
      <div className="section__title">Projects</div>
      <div className="section__content">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <div className="project__name">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
              ) : (
                <span>{project.name}</span>
              )}
            </div>
            <ul className="project__description">
              {project.description.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
            {project.githubUrl && (
              <p>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="small">
                  👨🏻‍💻 Github Source Code 👨🏻‍💻
                </a>
              </p>
            )}
            <div className="project__used">
              {project.used.map((item, itemIndex) => (
                <span key={itemIndex} className="project__used__item">{item.thing}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects