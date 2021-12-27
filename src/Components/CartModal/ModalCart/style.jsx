import styled from "styled-components";

export const ModalCartContainer = styled.div`
    flex-direction: column;

    header {
        height: 10vh;
        min-height: 100px;
        gap: 0.2rem;

        & aside {
            width: 80px;
            height: 100px;

            .swiper-button-next,
            .swiper-button-prev {
                display: none;
            }
        }

        section {
            margin-right: 0px;

            div {
                &:first-child {
                    flex-direction: column;
                    align-items: flex-start;
                }

                &:last-child {
                    span {
                        font-size: 1rem;
                        padding: 0.6rem 0;
                    }

                    div {
                        padding: 0.2rem;

                        p {
                            font-size: 0.85rem;
                        }
                    }
                }
            }

            h2,
            h4 {
                font-size: 0.85rem;
                padding-bottom: 0.2rem;
            }

            h6 {
                font-size: 0.95rem;
            }
        }
    }
`;

export const MyBag = styled.div`
    margin-left: -145px;
    gap: 0.5rem;
`;
