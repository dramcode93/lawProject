
import './slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import img1 from "../images/img_untitled_1_02_02.png"
import img2 from '../images/img_untitled_1_02_02_257x212.png'
import img3 from '../images/img_untitled_1_02_02_372x400.png'
import { EffectFade, Pagination } from 'swiper/modules';

function AnimatedSlider1() {
  return (
    <div className='container2'>
      <div className='animatedText'>
        <h1 className='pt-5'>لماذا تختارنا وبكل ثقة؟</h1>
        <p className='my-3'>يمتاز مكتبنا عن غيره من مكاتب المحاماة المعتمدة الأخرى في الأخلاقيات التي تسيّر آلية العمل داخل مكتبناء بالإضافة إلى مبادئ
          المحامين والشركاء العاملين في المكتب والمؤمنين بأهمية تطوير الذات على المستوى العملي والقانوني سعيا منهم لتحويل مكتبنا
          الشركة محاماة دولية في مصر. فقد شهد عملاؤنا بقوة مكتبنا وثقة التعامل معنا والمبادئ التالية ما ستجدها عند التعامل معنا:</p>
      </div>
      <>
        <Swiper
          effect={'fade'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          fadeEffect={{
            crossFade: true
          }}
          pagination={true}
          modules={[EffectFade, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img style={{ width: "50%" }} src={img1} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "50%" }} src={img2} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "50%", height: "100%" }} src={img3} alt='' />
          </SwiperSlide>
        </Swiper>
      </>

    </div>
  );
}

export default AnimatedSlider1;
