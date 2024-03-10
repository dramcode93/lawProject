import './App.css';
import Carousal from './component/Carousal/Carousal';

import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
 import Slider from './component/Slider/Slider';
import AnimatedSlider1 from './animatedSlider/AnimatedSlider1';
import SwipeToSlide from './component/SwiperToReact/Swiper';
 import Counter from './component/counts/Counter';
import Input from './component/Inputs/Input';
import MainCards from './component/cards/MainCards';
import Clients from './component/clients/Clients';
import Section5 from './component/Section5/Section5';
import Section6 from './component/Section6/Section6';
import Section7 from './component/Section7/Section7';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Slider/>
      <AnimatedSlider1 />
      <Section5 />
      <Section6 />
      <Clients/>
      <MainCards/>
       <Counter/>
      <Input/>
      <SwipeToSlide/>
      <Section7/>
        <Carousal/>
      <Footer/>
    </div>
  );
}

export default App;
