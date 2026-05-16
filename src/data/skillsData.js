// ============================================
// skillsData.js — All Skills Data
// ============================================
// Skills are grouped into categories.
// Each skill has:
//   name     — display name
//   level    — proficiency 1–10 (drives the dashes)
//   iconText — short text shown inside the icon box (like "Ai", "Ps", "Re")
//   iconBg   — background color of the icon box
//   iconColor— text color inside the icon box
//
// TO ADD A SKILL:
//   Copy any object, paste it, fill in your details.
//   level: 10 = full bar, 5 = half bar, etc.
// ============================================

export const skillCategories = [
  {
    id: 'dev',
    heading: 'Web Dev',
    skills: [
      { name: 'React',       level: 9,  iconText: 'Re', iconBg: '#20232a', iconColor: '#61dafb' },
      { name: 'JavaScript',  level: 7,  iconText: 'JS', iconBg: '#f7df1e', iconColor: '#000000' },
      { name: 'CSS',         level: 9,  iconText: 'CS', iconBg: '#264de4', iconColor: '#ffffff' },
      { name: 'HTML',        level: 10, iconText: 'HT', iconBg: '#e44d26', iconColor: '#ffffff' },
      { name: 'Node.js',     level: 7,  iconText: 'Nd', iconBg: '#3c873a', iconColor: '#ffffff' },
      { name: 'Python',      level: 7,  iconText: 'Py', iconBg: '#306998', iconColor: '#ffd43b' },
      { name: 'Django',      level: 9,  iconText: 'Dj', iconBg: '#092e20', iconColor: '#44b78b' },
      { name: 'Tailwind',    level: 6,  iconText: 'Tw', iconBg: '#0ea5e9', iconColor: '#ffffff' },
    ],
  },
  {
    id: 'design',
    heading: 'Graphics Design',
    skills: [
      // { name: 'Figma',           level: 9,  iconText: 'Fi', iconBg: '#1e1e1e', iconColor: '#f24e1e' },
      { name: 'Photoshop',       level: 8,  iconText: 'Ps', iconBg: '#001e36', iconColor: '#31a8ff' },
      // { name: 'Illustrator',     level: 8,  iconText: 'Ai', iconBg: '#330000', iconColor: '#ff9a00' },
      // { name: 'After Effects',   level: 6,  iconText: 'Ae', iconBg: '#00005b', iconColor: '#9999ff' },
      // { name: 'Premiere Pro',    level: 6,  iconText: 'Pr', iconBg: '#00005b', iconColor: '#9999ff' },
      { name: 'Canva',           level: 9,  iconText: 'Ca', iconBg: '#7d2ae7', iconColor: '#ffffff' },
      { name: 'VS Code',         level: 10, iconText: 'VS', iconBg: '#007acc', iconColor: '#ffffff' },
      { name: 'Git',             level: 8,  iconText: 'Gt', iconBg: '#f05032', iconColor: '#ffffff' },
    ],
  },
]