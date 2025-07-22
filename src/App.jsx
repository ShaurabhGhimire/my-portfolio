import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import About from './components/About';
import Projects  from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
function App() {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <CustomCursor />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Awards />
            <Contact />
      </motion.div>
    </>
  );
}

export default App;
