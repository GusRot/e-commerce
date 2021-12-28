import React, { useState } from "react";
import SwiperCore, {
    Navigation,
    A11y,
    Keyboard,
    Mousewheel,
    Thumbs,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Img from "../../../assets/Ciri.jpg";

SwiperCore.use([Navigation, A11y, Keyboard, Thumbs, Mousewheel]);

const slides = [Img, Img, Img, Img, Img];

const thumbs = [Img, Img, Img, Img, Img];

function App() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                id="thumbs"
                className="swiper-container-vertical"
                spaceBetween={0}
                slidesPerView={3}
                onSwiper={setThumbsSwiper}
                direction={"vertical"}
            >
                {thumbs.map((slide, i) => (
                    <SwiperSlide key={`thumb-${i}`}>
                        <img src={slide} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                className="swiper-container vertical"
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, A11y]}
                navigation={{ clickable: true }}
                direction={"horizontal"}
                loop={true}
                slidesPerView={1}
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={`slide-${i}`} tag="li">
                        <img src={slide} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default App;
