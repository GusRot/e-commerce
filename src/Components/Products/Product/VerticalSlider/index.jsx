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
import { useEffect } from "react";

SwiperCore.use([Navigation, A11y, Keyboard, Thumbs, Mousewheel]);

function App({ slides = [] }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [navigation, setNavigation] = useState(true);

    useEffect(
        () => (slides.length <= 1 ? setNavigation(false) : ""),
        [slides.length]
    );

    return (
        <>
            <Swiper
                id="thumbs"
                className="swiper-container-vertical"
                spaceBetween={0}
                slidesPerView={slides.length}
                loop={navigation}
                slideToClickedSlide={true}
                preventClicks={false}
                preventClicksPropagation={false}
                onSwiper={setThumbsSwiper}
                direction={"vertical"}
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={`thumb-${i}`}>
                        <img src={slide} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                className="swiper-container vertical"
                mousewheel={navigation}
                keyboard={navigation}
                modules={[Navigation, A11y]}
                navigation={{ clickable: navigation }}
                direction={"horizontal"}
                loop={navigation}
                slidesPerView={1}
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={`Vslide-${i}`} tag="li">
                        <img src={slide} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default App;
