import Hero from './components/Hero';
import Invitation from './components/Invitation';
import Story from './components/Story';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import RsvpForm from './components/RsvpForm';
import Footer from './components/Footer';
import FloatingRsvp from './components/FloatingRsvp';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-text-base font-sans selection:bg-powder selection:text-navy relative overflow-hidden">
      
      {/* Background Floral Elements */}
      <div className="fixed top-0 left-0 w-80 h-80 opacity-[0.03] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1e293b" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,86.2,-0.5C85.3,14.6,80,29.3,71.7,42.1C63.4,54.8,52.1,65.6,38.9,73.1C25.7,80.6,10.6,84.8,-4.2,92.1C-19,99.4,-38,109.8,-53.4,106.3C-68.8,102.7,-80.6,85.2,-88.4,68.1C-96.2,51,-100.1,34.4,-99.4,18.4C-98.7,2.5,-93.4,-12.8,-86,-26.8C-78.6,-40.8,-69.1,-53.5,-56.9,-61.2C-44.7,-68.9,-29.8,-71.6,-15.3,-75.4C-0.8,-79.1,13.7,-83.8,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="fixed bottom-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none z-0 translate-x-1/3 translate-y-1/3">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1e293b" d="M37.5,-63.4C49.1,-56.3,59.3,-46.8,66.8,-35.3C74.3,-23.8,79.1,-10.3,77.8,2.7C76.5,15.7,69.1,28.2,60.1,38.9C51.1,49.6,40.5,58.4,28.5,64.2C16.5,70,3.1,72.7,-10.1,70.9C-23.3,69.1,-36.3,62.8,-47.5,53.8C-58.7,44.8,-68.1,33,-73,19.6C-77.9,6.2,-78.3,-8.9,-74.6,-23C-70.9,-37.1,-63.1,-50.2,-51.7,-57.5C-40.3,-64.8,-25.3,-66.3,-11.2,-64.8C2.9,-63.3,16.8,-58.8,37.5,-63.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <Hero />
      <Invitation />
      <Story />
      <EventDetails />
      <Gallery />
      <RsvpForm />
      <Footer />
      <FloatingRsvp />
    </div>
  );
}
