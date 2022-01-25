import styled from "styled-components";

export const ContainerSlider = styled.div`
    display: flex;
    gap: 2rem;
    max-width: 1024px;
    width: 100%;
    margin: 0px auto;
    padding: 6.5rem 1rem 0 1rem;

    section {
        max-width: 650px;
        display: flex;

        div:first-child {
            width: 120px;
            height: fit-content;

            div {
                height: fit-content !important;
            }

            img {
                width: 80%;
                object-fit: scale-down;
                position: relative;
                z-index: 3;
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
                    object-fit: fill;
                }
            }
        }
    }
    div {
        h3 {
            font-family: "Roboto Condensed", sans-serif;
            display: inline-block;
            font-weight: 700;
            text-transform: uppercase;
        }

        h2 {
            padding-bottom: 0rem;
            font-weight: 600;
            font-size: 1.875rem;
        }

        h4 {
            font-size: 1.875rem;
        }

        span {
            font-family: "Roboto Condensed", sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 1.125rem;
        }

        h6 {
            font-size: 1.5rem;
        }

        h1 {
            margin: 0;
            font-size: 1.5rem;
        }
    }

    button + p {
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

    section + div {
        width: 100%;
    }
`;

export const ContainerInfo = styled.div`
    max-width: 350px;
`;

export const DescriptionInfo = styled.div`
    display: flex;
    flex-direction: column;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
    }

    p,
    span {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }
`;
