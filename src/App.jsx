import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { FaReact, FaJs, FaPython, FaGitAlt, FaDocker } from 'react-icons/fa'
import { SiTailwindcss, SiVite, SiMongodb, SiExpress } from 'react-icons/si'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const sections = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ]

  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'Python', icon: FaPython, color: 'text-green-400' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Vite', icon: SiVite, color: 'text-purple-400' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-400' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-400' }
  ]

  const projects = [
    {
      title: "Portfolio Futuriste",
      description: "Portfolio avec design cyberpunk et animations fluides",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      title: "App de Gestion",
      description: "Application web pour la gestion de projets",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Bot Discord",
      description: "Bot Discord avec fonctionnalités avancées",
      tech: ["Python", "Discord.py", "SQLite"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      link: "#"
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-cyber-dark text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-cyber-gray/80 backdrop-blur-md border-b border-cyber-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <h1 className="text-2xl font-bold neon-text glitch" data-text="DEV_PORTFOLIO">
                DEV_PORTFOLIO
              </h1>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentSection(section.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === section.id
                      ? 'neon-text bg-cyber-light'
                      : 'text-gray-300 hover:text-neon-pink'
                  }`}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-cyber-light hover:bg-cyber-gray transition-colors"
              >
                {darkMode ? <FiSun className="w-5 h-5 text-neon-yellow" /> : <FiMoon className="w-5 h-5 text-neon-blue" />}
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg bg-cyber-light hover:bg-cyber-gray transition-colors"
              >
                {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-cyber-gray border-t border-cyber-light"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setCurrentSection(section.id)
                      setMenuOpen(false)
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      currentSection === section.id
                        ? 'neon-text bg-cyber-light'
                        : 'text-gray-300 hover:text-neon-pink'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Home Section */}
        {currentSection === 'home' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 w-72 h-72 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-bounce-slow"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-spin-slow"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-8xl font-bold mb-6">
                  <span className="neon-text glitch" data-text="BONJOUR">BONJOUR</span>
                  <br />
                  <span className="text-neon-blue glitch" data-text="MUNDO">MUNDO</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Développeur passionné par les technologies futuristes et l'innovation
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-neon-pink text-white rounded-lg font-bold hover:bg-neon-purple transition-colors neon-border"
                  >
                    Voir mes projets
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border border-neon-blue text-neon-blue rounded-lg font-bold hover:bg-neon-blue hover:text-cyber-dark transition-colors"
                  >
                    <FiDownload className="inline mr-2" />
                    CV
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* About Section */}
        {currentSection === 'about' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen py-20 px-4"
          >
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-6xl font-bold text-center mb-16 neon-text"
              >
                À PROPOS
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="cyber-card">
                    <h3 className="text-2xl font-bold mb-4 text-neon-blue">Qui suis-je ?</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Passionné de développement web et de technologies émergentes, 
                      je crée des expériences numériques innovantes et performantes. 
                      Mon approche combine créativité et rigueur technique pour 
                      développer des solutions qui marquent les esprits.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Toujours en quête d'apprentissage, je m'intéresse particulièrement 
                      aux nouvelles technologies et aux tendances du développement web moderne.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6"
                >
                  <div className="cyber-card">
                    <h4 className="text-xl font-bold mb-4 text-neon-green">Formation</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Master en Informatique</li>
                      <li>• Spécialisation en Développement Web</li>
                      <li>• Certifications diverses</li>
                    </ul>
                  </div>

                  <div className="cyber-card">
                    <h4 className="text-xl font-bold mb-4 text-neon-yellow">Passions</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Technologies émergentes</li>
                      <li>• Culture geek/otaku</li>
                      <li>• Innovation et créativité</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Skills Section */}
        {currentSection === 'skills' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen py-20 px-4"
          >
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-6xl font-bold text-center mb-16 neon-text"
              >
                COMPÉTENCES
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="cyber-card text-center group cursor-pointer"
                  >
                    <skill.icon className={`w-12 h-12 mx-auto mb-4 ${skill.color} group-hover:scale-110 transition-transform`} />
                    <h3 className="font-bold text-lg">{skill.name}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Projects Section */}
        {currentSection === 'projects' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen py-20 px-4"
          >
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-6xl font-bold text-center mb-16 neon-text"
              >
                PROJETS
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -10 }}
                    className="cyber-card group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent"></div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-neon-blue">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-cyber-light text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button className="text-neon-pink hover:text-neon-blue transition-colors">
                      Voir le projet →
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Contact Section */}
        {currentSection === 'contact' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen py-20 px-4"
          >
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-6xl font-bold text-center mb-16 neon-text"
              >
                CONTACT
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="cyber-card">
                    <h3 className="text-2xl font-bold mb-6 text-neon-blue">Parlons de votre projet</h3>
                    <p className="text-gray-300 mb-8">
                      Vous avez un projet en tête ? Discutons-en ! Je suis toujours 
                      ouvert aux nouvelles opportunités et collaborations intéressantes.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <FiMail className="w-5 h-5 text-neon-pink" />
                        <span className="text-gray-300">contact@example.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiGithub className="w-5 h-5 text-neon-pink" />
                        <span className="text-gray-300">github.com/username</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiLinkedin className="w-5 h-5 text-neon-pink" />
                        <span className="text-gray-300">linkedin.com/in/username</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <form className="cyber-card space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-cyber-light border border-cyber-gray rounded-lg focus:border-neon-pink focus:outline-none transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-cyber-light border border-cyber-gray rounded-lg focus:border-neon-pink focus:outline-none transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea 
                        rows="4"
                        className="w-full px-4 py-3 bg-cyber-light border border-cyber-gray rounded-lg focus:border-neon-pink focus:outline-none transition-colors resize-none"
                        placeholder="Votre message..."
                      ></textarea>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-neon-pink text-white rounded-lg font-bold hover:bg-neon-purple transition-colors neon-border"
                    >
                      Envoyer le message
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-cyber-darker border-t border-cyber-light py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Portfolio Futuriste. Créé avec ❤️ et beaucoup de café ☕
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App 