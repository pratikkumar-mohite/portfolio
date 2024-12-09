import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import BookMeeting from '../components/BookMeeting';
import Highlights from '../components/Highlights';
import Contact from '../components/Contact';

function App() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Highlights />
      <BookMeeting />
      <Contact />
    </div>
  );
}

export default App;