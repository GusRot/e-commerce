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

SwiperCore.use([Navigation, Scrollbar, A11y, Autoplay, Keyboard, Mousewheel]);

class Slider extends Component {
    render() {
        const { slides } = this.props;
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
