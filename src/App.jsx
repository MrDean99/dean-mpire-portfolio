// ============================================
// App.jsx — The Root Component
// ============================================
// This is the entry point of your React app.
// It sets up "routing" — which means deciding
// which PAGE to show based on the URL.
// ============================================

// React Router gives us navigation without page reloads
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layout components (always visible)
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages (each one is a different URL)
import Home from './pages/Home'
import Profile from './pages/Profile'
import WebProjects from './pages/Webprojects'
import GraphicsWork from './pages/Graphicswork'
import Contact from './pages/Contact'
import Works from './pages/Works'

// Global styles — imported once here, applies everywhere
import './styles/Global.css'
import Todaydate from './components/Todaydate'
import FloatingButtons from './components/Floatingbuttons'



// ─────────────────────────────────────────────
// App Component
// Think of this as the "shell" of your site.
// Navbar + the current page + Footer.
// ─────────────────────────────────────────────
function App() {
  return (
    // BrowserRouter enables URL-based navigation
    <BrowserRouter>

      {/* Navbar appears on EVERY page */}
      <Navbar />
      <Todaydate />

      {/* 
        Routes = the "switchboard"
        It looks at the current URL and renders
        the matching page component.
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/web-projects" element={<WebProjects />} />
        <Route path="/graphics" element={<GraphicsWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
      </Routes>

      {/* Footer appears on EVERY page */}
      <Footer />

      {/* Floating contact buttons — always visible, bottom-right */}
      <FloatingButtons />

    </BrowserRouter>
  )
}

export default App