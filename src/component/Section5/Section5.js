import React from 'react'
import '../Section5/Section.css'
import img1 from "../Section5/óÜ½n½ ƒT¼¬Fƒó.png"
import img2 from '../Section5/ƒ½óúO¬ sn O¡¬.png'
import img3 from '../Section5/ƒTtaƒnƒ ƒTptƒ¬ní.png'
import img4 from '../Section5/img_rectangle_440_316x510.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
const Section5 = () => {
    return (
        <div className='mainSwiper'>
            <div >
                <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination]}
                    className="mySwiperr"
                >
                    <SwiperSlide style={{ width: "30px", height: "50px" }} >
                        <img style={{ width: "400px", height: "200px" }} src={img1} alt='' />
                        <div className="company-setup-container">

                            <p className="company-setup-text">

                                <h2>تاسيس الشركات</h2>

                                هل ترغب في تأسيس شركة في مصر؟ نعمل على

                                تقديم الدعم لأعمال الشركات المختلفة بمستوى مميز

                                من الأداء. حيث نقدم الدعم في  <a style={{ color: "white" }} href='/'>تاسيس الشركات</a> في

                                مصر والسعودية والإمارات بمختلف أنواعها، وإعداد

                                عقود التأسيس واللوائح الداخلة، بالإضافة إلى مساعدة

                                العملاء على اختيار نوع الشركة وتوفير الدعم في

                                كافة مراحل التأسيس والإعداد. تأسيس الشركات هل ترغب في تأسيس شركة في مصر ؟ نعمل على تقديم الدعم لأعمال الشركات المختلفة بمستوى مميز من الأداء . حيث نقدم الدعم في تأسيس الشركات في مصر والسعودية والإمارات بمختلف أنواعها ، وإعداد عقود التأسيس واللوائح الداخلة ، بالإضافة إلى مساعدة العملاء على اختيار نوع الشركة وتوفير الدعم في كافة مراحل التأسيس والإعداد .<br />
                                <a href="/" style={{ color: "white" }}>الذهاب الى الصفحة  </a>
                            </p>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide style={{ width: "100px", height: "50px" }} >
                        <img style={{ width: "400px", height: "200px" }} src={img2} alt='' />
                        <div className="company-setup-container">

                            <p className="company-setup-text">
                                <h1> الاستشارات القانونيه</h1>

                                نفخر بتقديم الاستشارات القانونية من مستشار قانوني محنك مع دعم من أكبر محامين مصر المتخصصين في مجالات القانون المختلفة<br />

                                والمستعدين لتقديم المشورة والرأي القانوني حول القضايا المختلفة للأفراد والشركات مع تقديم أفضل الحلول الموثوقة لمشكلاتهم القانونية<br />

                                وهذه الخدمة لكل من يبحث عن رقم محامي للاستشارة.<br /><br />

                                <a href="/" style={{ color: "white" }}>الذهاب الى الصفحة  </a>
                            </p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "100px", height: "50px" }} >
                        <img style={{ width: "400px", height: "200px" }} src={img3} alt='' />
                        <div className="company-setup-container">

                            <p className="company-setup-text">
                                <h1>  استثمر في مصر</h1>

                                استثمار في مصر يعد فرصة مثيرة بفضل موقعها<br />

                                الاستراتيجي، واقتصادها المتنامي، وجهودها في<br />

                                تحسين بيئة الاستثمار. تقدم الحكومة دعمًا وتسهيلات<br />

                                للمستثمرين والسوق المصري يوفر فرصا متنوعة<br />

                                وواسعة للعملاء المحتملين.<br /><br />

                                <a href="/" style={{ color: "white" }} >الذهاب الى الصفحة    </a>
                            </p>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide style={{ width: "100px", height: "50px" }} >
                        <img style={{ width: "400px", height: "200px" }} src={img4} alt='' />
                        <div className="company-setup-container">

                            <p className="company-setup-text">
                                <h1>  توكيل محامي  </h1>

                                توكيل المحامي هو اتفاق قانوني يمنح شخصًا آخر<br />

                                صلاحية تمثيلك أو تنفيذ الإجراءات القانونية<br />

                                نيابة عنك. يعتمد على الثقة والثقة المتبادلة<br />

                                ويتضمن توثيقًا رسميًا لتحديد نطاق الصلاحيات<br />

                                الممنوحة.<br /><br />

                                <a href="/" style={{ color: "white" }} >الذهاب الى الصفحة    </a>
                            </p>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='infoSwiper'>
                <h1 style={{ marginBottom: "50px", textAlign: "end" }}> محامين خبراء في مجالات <br />القانون والقضايا المختلفة<br /></h1>
                <p style={{ textAlign: "end" }}>ما يميز مكتبنا عن مكاتب المحاماة الأخرى، هو انفرادنا<br />

                    بالتخصصات القانونية التي تتطلب خبرة قانونية وفكر<br />

                    استراتيجي من الدرجة الأولى حيث نفخر بوجود شركائنا<br />

                    المتخصصين في مجالات القانون المختلفة، والمستعدون<br />

                    لدعم عملائنا الكرام بكل السبل الممكنة لتحقيق أهدافهم<br />

                    بأسرع وقت وبأعلى جودة ممكنة؛ سعياً منا لنصبح أفضل<br />

                    شركة محاماة في مصر في المستقبل القريب.<br /><br />

                    <a href="/">اطلب الأن أستشارة فورية</a>

                </p>
            </div>
        </div>
    )
}

export default Section5



