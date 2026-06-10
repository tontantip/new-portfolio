import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <main>
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
