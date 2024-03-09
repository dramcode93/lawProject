import './App.css';
import Carousal from './component/Carousal/Carousal';

import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
 import Slider from './component/Slider/Slider';
import AnimatedSlider1 from './animatedSlider/AnimatedSlider1';
import SwipeToSlide from './component/SwiperToReact/Swiper';
import VerticalSlider from './component/verticalSlide/VerticalSlider';
import Counter from './component/counts/Counter';
import Input from './component/Inputs/Input';
import MainCards from './component/cards/MainCards';
import Clients from './component/clients/Clients';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Slider/>
      <AnimatedSlider1 />
      <SwipeToSlide/>
      <VerticalSlider/>
      <Clients/>
      <MainCards/>
       <Counter/>
      <Input/>
       <Carousal/>
      <Footer/>
    </div>
  );
}

export default App;
