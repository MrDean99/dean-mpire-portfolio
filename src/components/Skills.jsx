// ============================================
// Skills.jsx — Skills Section
// ============================================
// Layout mirrors the reference image:
//   - Big section heading (like "Softwares")
//   - Two-column grid of skill rows
//   - Each row: [icon box] [name] [dashed bar]
//   - Dashes fill amber based on level (1–10)
//
// This component is used in:
//   ✅ Home page (here)
//   🔜 Profile page (import and drop in)
//
// Concepts used:
//   - Array.map(): loop over skill categories & skills
//   - Inline style: sets icon bg/color dynamically
//   - Array.from(): creates an array of N items for dashes
// ============================================

import { useEffect, useRef, useState } from 'react'
import { skillCategories } from '../data/skillsData'
import '../styles/Skills.css'
import Animate from './Animate'

// ── Total number of dashes per bar ──────────
const TOTAL_DASHES = 10

// ── Single skill row ────────────────────────
// Extracted as its own mini-component for clarity
function SkillRow({ skill, animate }) {
  return (
    <Animate animation="zoom-in" >
      <div className="skill-row">

        {/* Icon box — bg and text color come from data */}
        <div
          className="skill-row__icon"
          style={{
            backgroundColor: skill.iconBg,
            color: skill.iconColor,
          }}
          aria-hidden="true"
        >
          {skill.iconText}
        </div>

        {/* Skill name */}
        <span className="skill-row__name">{skill.name}</span>

        {/* Dashed progress bar */}
        {/*
        We create an array of TOTAL_DASHES items (10 dashes).
        Each dash is either "filled" (amber) or "empty" (dark)
        depending on whether its index is less than skill.level.
        
        Example: level = 7 → dashes 0–6 are filled, 7–9 are empty
      */}
        <div
          className="skill-row__bar"
          role="progressbar"
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={TOTAL_DASHES}
          aria-label={`${skill.name} proficiency: ${skill.level} out of ${TOTAL_DASHES}`}
        >
          {Array.from({ length: TOTAL_DASHES }, (_, i) => (
            <span
              key={i}
              className={`skill-row__dash ${i < skill.level ? 'skill-row__dash--filled' : 'skill-row__dash--empty'}`}
              style={{
                // Stagger the animation: each dash animates slightly later
                // Only animate when the section is visible (animate prop)
                transitionDelay: animate ? `${i * 60}ms` : '0ms',
              }}
            />
          ))}
        </div>

      </div>
    </Animate>
  )
}

// ── Main Skills component ────────────────────
function Skills() {
  // "animate" becomes true once the section scrolls into view
  // This triggers the dash fill animation
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    // IntersectionObserver watches when an element enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)       // trigger animation
          observer.disconnect()  // only animate once
        }
      },
      { threshold: 0.2 }  // fire when 20% of the section is visible
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className={`skills section ${animate ? 'skills--animated' : ''}`} id="skills" ref={sectionRef}>
      <div className="container">

        {/* ── Section header ── */}
        <div className="skills__header">
          <p className="section-label">Toolkit</p>
          <h2 className="skills__heading">
            Skills & <span className="accent">Software</span>
          </h2>
          <p className="skills__subtitle">
            Tools I use to design, build, and ship.
          </p>
        </div>

        {/* ── Loop over each category ── */}
        {/*
          skillCategories is an array of objects.
          Each object has a heading + array of skills.
          We render one block per category.
        */}
        {skillCategories.map((category) => (
          <div key={category.id} className="skills__category">

            {/* Category heading — e.g. "Development" */}
            <h3 className="skills__category-heading">
              {category.heading}
            </h3>

            {/* Two-column grid of skill rows */}
            <div className="skills__grid">
              {category.skills.map((skill) => (
                <SkillRow
                  key={skill.name}
                  skill={skill}
                  animate={animate}
                />
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default Skills