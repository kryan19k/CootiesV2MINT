import "./collection.css";
import Img1 from "./../../assets/images/collection/1.png";
import Img2 from "./../../assets/images/collection/2.png";
import Img3 from "./../../assets/images/collection/3.png";
import Img4 from "./../../assets/images/collection/4.png";
import Img5 from "./../../assets/images/collection/5.png";
import Img6 from "./../../assets/images/collection/6.png";
import CollectionBlur from "./../../assets/images/collection/collection-blur.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Collection = () => {
    return (
        <>
            <div className="collection-box">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={14}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },

                        1200: {
                            slidesPerView: 6,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="collection-img">
                            <img src={Img1} alt="collection" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="collection-img">
                            <img src={Img2} alt="collection" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="collection-img">
                            <img src={Img3} alt="collection" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="collection-img">
                            <img src={Img4} alt="collection" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="collection-img">
                            <img src={Img5} alt="collection" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="collection-img">
                            <img src={Img6} alt="collection" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="collection-img">
                            <img src={Img4} alt="collection" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="collection-img">
                            <img src={Img5} alt="collection" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="collection-img">
                            <img src={Img6} alt="collection" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="collection-blur-layer">
                    <img src={CollectionBlur} alt="collection-blur" />
                </div>
            </div>
        </>
    );
};

export default Collection;
