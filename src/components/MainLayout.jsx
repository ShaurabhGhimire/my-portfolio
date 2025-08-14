import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Awards from './Awards';
import Contact from './Contact';
import CustomCursor from './CustomCursor';
import ConstellationBackground from './ConstellationBackground';

export default function MainLayout() {
  return (
    <div className="relative flex flex-col min-h-screen z-10 text-white overflow-hidden">
      <ConstellationBackground />
      <CustomCursor />

      <About />
      <Projects />
      <Skills />
      <Awards />
      <Contact />
    </div>
  );
}
