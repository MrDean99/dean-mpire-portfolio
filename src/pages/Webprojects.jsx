// ============================================
// WebProjects.jsx — Web Projects Full Page
// ============================================

import ProjectCard from '../components/Projectcard'
import { webProjects } from '../data/projectsData'
import '../styles/Webprojects.css'

function WebProjects() {
  return (
    <main className="web-projects-page">
      <div className="container">

        <div className="web-projects-page__header">
          <p className="section-label">Development</p>
          <h1 className="web-projects-page__title">
            Web <span className="accent">Projects</span>
          </h1>
          <p className="web-projects-page__subtitle">
            A collection of websites, apps, and digital experiences
            — each built with purpose and attention to detail.
          </p>
        </div>

        <div className="web-projects-page__stats">
          <div className="web-projects-page__stat">
            <span className="web-projects-page__stat-num">{webProjects.length}</span>
            <span className="web-projects-page__stat-lbl">Total Projects</span>
          </div>
          <div className="web-projects-page__stat-div" />
          <div className="web-projects-page__stat">
            <span className="web-projects-page__stat-num">
              {webProjects.filter(p => p.liveUrl).length}
            </span>
            <span className="web-projects-page__stat-lbl">Live Sites</span>
          </div>
        </div>

        <div className="web-projects-page__grid">
          {webProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              index={i + 1}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              category="web"
            />
          ))}
        </div>

      </div>
    </main>
  )
}

export default WebProjects