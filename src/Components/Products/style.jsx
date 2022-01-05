import styled from "styled-components";

export const ContainerSlider = styled.div`
    display: flex;
    gap: 2rem;
    max-width: 1024px;
    margin: 0px auto;
    padding: 6.5rem 1rem 0 1rem;

    section {
        max-width: 650px;
        display: flex;

        div:first-child {
            width: 120px;

            img {
                width: 80%;
            }

            @media (max-width: 960px) {
                width: 100px;
            }
            @media (max-width: 750px) {
                width: 80px;

                img {
                    height: 80px;
                }
            }
            @media (max-width: 660px) {
                max-width: 100px;

                img {
                    height: 100px;
                }
            }
        }
    }
    div {
        h3 {
            display: inline-block;
            margin-top: 1.2rem;
        }

        h2 {
            padding-bottom: 0rem;
        }
    }

    p {
        text-align: justify;
    }

    .swiper-container-vertical .swiper-slide {
        opacity: 0.75;
        cursor: pointer;
    }

    .swiper-container-vertical .swiper-slide-thumb-active {
        opacity: 1;
    }

    .swiper-container.vertical {
        max-width: 500px;

        @media (max-width: 960px) {
            max-width: 400px;
        }

        @media (max-width: 750px) {
            max-width: 350px;
        }

        @media (max-width: 660px) {
            max-width: 500px;
        }
    }

    @media (max-width: 660px) {
        flex-direction: column;
    }
`;
