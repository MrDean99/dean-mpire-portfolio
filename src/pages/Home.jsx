import About from "../components/About"
import ContactSection from "../components/Contactsection"
import FeaturedProjects from "../components/Featuredprojects"
import Hero from "../components/Hero"
import ProfileServices from "../components/profile/ProfileServices"
import Skills from "../components/Skills"

// Home.jsx — placeholder (we'll build sections here next)
function Home() {
  return (
    <main>
      {/* ✅ Hero section — done! */}
      <Hero />

      {/* 🔜 About section — coming next */}
      <About />

      <ProfileServices />

      {/* ✅ Featured Projects section */}
      <FeaturedProjects />

      {/* ✅ Skills section */}
      <Skills />

      {/* ✅ Contact section */}
      <ContactSection />

      {/* 🔜 Skills section — coming soon */}
      {/* <Skills /> */}
    </main>
  )
}
export default Home