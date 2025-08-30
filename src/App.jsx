import { useState } from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Resume } from './components/Resume/Resume';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </>
  )
}

export default App
