// import React from 'react'
// import logo from '../../images/img_path334.svg'
// import './client.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import img1 from "../../images/img_rectangle_448.png"
// import img2 from '../../images/img_rectangle_448_299x278.png'
// import img3 from '../../images/img_rectangle_448_390x361.png'
// import { EffectCoverflow, Pagination } from 'swiper/modules';
// const Clients = () => {
//   return (
//     <div>
//           <div className='container4'>
//     <h1>فريق العمل </h1>
//     <img src={logo} alt='' className='logo'/>
//    <div><p>تتكون الهيكلة الإدارية للمجموعة التجارية والبحرية من أشهر محامين مصر أصحاب الخبرات في تخصصات القضايا المحلية
// والدولية المختلفة. حيث يضم المحامي محمد أبو ضيف الرئيس التنفيذي- مجموعة من الكوادر البشرية المتخصصة في
// مجالات القانون المختلفة. ولأن الجودة والسرعة هي شعارنا نعمل بروح الفريق لدمج الخبرات والمعرفة المتراكمة في دعم
// عملائنا الكرام على تحقيق أهدافهم القانونية.</p></div> 
// <div className='swiper2'>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 50,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         scrollbar={{ draggable: true, hide: true }} 

//       navigation={false}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiperr"
//       >
//         <SwiperSlide>
//           <img  style={{width:"50%"}} src={img1} alt='' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img  style={{width:"50%"}} src={img2} alt='' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img style={{width:"50%",height:"50%"}} src={img3} alt='' />
//         </SwiperSlide>
        
//       </Swiper>
//     </div>
//     </div>
        
//     </div>
//   )
// }

// export default Clients

import React from 'react';
import logo from '../../images/img_path334.svg';
import './client.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import img1 from "../../images/img_rectangle_448.png";
import img2 from '../../images/img_rectangle_448_299x278.png';
import img3 from '../../images/img_rectangle_448_390x361.png';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Clients = () => {
  return (
    <div>
      <div className='container4'>
        <h1>فريق العمل </h1>
        <img src={logo} alt='' className='logo'/>
        <div>
          <p>تتكون الهيكلة الإدارية للمجموعة التجارية والبحرية من أشهر محامين مصر أصحاب الخبرات في تخصصات القضايا المحلية والدولية المختلفة. حيث يضم المحامي محمد أبو ضيف الرئيس التنفيذي- مجموعة من الكوادر البشرية المتخصصة في مجالات القانون المختلفة. ولأن الجودة والسرعة هي شعارنا نعمل بروح الفريق لدمج الخبرات والمعرفة المتراكمة في دعم عملائنا الكرام على تحقيق أهدافهم القانونية.</p>
        </div> 
        <div className='swiper2'>
          <div className="swiper-container">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows: true,
              }}
              scrollbar={{ draggable: true, hide: true }} 
              navigation={false}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiperr"
            >
              <SwiperSlide>
                <img style={{ width: "50%" }} src={img1} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img style={{ width: "50%" }} src={img2} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img style={{ width: "50%", height: "50%" }} src={img3} alt='' />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

