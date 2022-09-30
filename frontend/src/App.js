import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Faq from './components/FAQ/Faq';
import EventDetail from './components/Event/EventDetail';
import Speaker from './components/Speaker/Speaker';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <EventDetail />
      <Speaker />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
