import React, { Component } from "react";
import SwiperCore, {
    Navigation,
    Scrollbar,
    A11y,
    Autoplay,
    Keyboard,
    Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Img from "../../../assets/Ciri.jpg";

SwiperCore.use([Navigation, Scrollbar, A11y, Autoplay, Keyboard, Mousewheel]);

const slides = [Img, Img, Img, Img, Img];
class Slider extends Component {
    render() {
        return (
            <Swiper
                className="swiper-container"
                mousewheel={true}
                loop={true}
                keyboard={true}
                modules={[Navigation, Scrollbar, A11y]}
                navigation={{ clickable: true }}
                scrollbar={{ draggable: true }}
                slidesPerView={1}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={`Hslide-${i}`} tag="li">
                        <img src={slide} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
}

export default Slider;
