// ============================================
// GraphicsWork.jsx — Graphics Work Full Page
// ============================================

import ProjectCard from '../components/ProjectCard'
import { graphicsProjects } from '../data/projectsData'
import '../styles/GraphicsWork.css'

function GraphicsWork() {
  return (
    <main className="graphics-page">
      <div className="container">

        <div className="graphics-page__header">
          <p className="section-label">Design</p>
          <h1 className="graphics-page__title">
            Graphics <span className="accent">Work</span>
          </h1>
          <p className="graphics-page__subtitle">
            Brand identities, posters, UI kits, and visual design
            — built to communicate and captivate.
          </p>
        </div>

        <div className="graphics-page__stats">
          <div className="graphics-page__stat">
            <span className="graphics-page__stat-num">{graphicsProjects.length}</span>
            <span className="graphics-page__stat-lbl">Total Designs</span>
          </div>
          {/* <div className="graphics-page__stat-div" /> */}
          {/* <div className="graphics-page__stat">
            <span className="graphics-page__stat-num">
              {graphicsProjects.filter(p => p.liveUrl).length}
            </span>
            <span className="graphics-page__stat-lbl">Live on Behance</span>
          </div> */}
        </div>

        <div className="graphics-page__grid">
          {graphicsProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              index={i + 1}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              category="graphics"
            />
          ))}
        </div>

      </div>
    </main>
  )
}

export default GraphicsWork