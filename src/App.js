
import './App.css';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeSection from './Components/HomeSection';
import PopularSection from './Components/PopularSection';
import ReviewSection from './Components/ReviewSection';
import ScrollUp from './Components/ScrollUp';
import ServicesSection from './Components/ServicesSection';

function App() {
  return (
    <div className="App">
    <ScrollUp/>
   <Header/>
   <HomeSection/>
   <ServicesSection/>
   <AboutUs/>
   <PopularSection/>
   <ReviewSection/>
   <Footer/>
    </div>
  );
}

export default App;
