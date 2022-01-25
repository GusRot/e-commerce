import styled from "styled-components";

export const ModalCartContainer = styled.div`
    flex-direction: column;
    gap: 0;
    overflow: auto;
    align-items: flex-start !important;
    background-color: ${({ theme }) => theme.header};
    padding: 10px;

    header {
        height: fit-content;
        width: 300px;
        gap: 0.2rem;
        align-items: center;

        & aside {
            width: 80px;
            height: 100%;

            div {
                max-height: 100px;
            }

            .swiper-button-next,
            .swiper-button-prev {
                display: none;
            }

            .swiper-scrollbar {
                display: none;
            }
        }

        section {
            margin-right: 0px;
            width: 200px;

            & > div {
                &:first-child {
                    height: fit-content;
                    width: 160px;
                }

                &:last-child {
                    height: 150px;
                }
            }

            div {
                &:first-child {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0;

                    div + div {
                        flex-direction: column;
                        align-items: flex-start;

                        span {
                            font-size: 0.7rem;
                            padding: 0 0 0.6rem;
                        }

                        div {
                            flex-direction: row;
                            justify-content: flex-start;
                        }
                    }
                }

                &:last-child {
                    min-height: 0;
                    span {
                        font-size: 1rem;
                        padding: 0.6rem 0;

                        & + div {
                            width: 100%;
                            flex-wrap: wrap;
                            justify-content: space-between;

                            div {
                                max-width: 3rem;
                                justify-content: center;
                                align-items: center;
                                margin-bottom: 3px;
                            }
                        }
                    }

                    div {
                        max-width: 120px;
                        padding: 0.2rem;
                        justify-content: flex-start;

                        p {
                            font-size: 0.85rem;
                            padding: 0rem;
                            line-height: 1rem;
                        }
                    }
                }
            }

            div {
                h2,
                h4 {
                    font-size: 1rem;
                    padding: 0rem;
                    margin: 0;
                    font-weight: 300;
                    line-height: 1.4rem;
                }

                span {
                    font-weight: 500;
                    padding: 0 !important;
                    line-height: 1.65rem;
                }

                h6 {
                    font-size: 1rem;
                    font-weight: 500;
                    margin: 5px 0 0 0;
                }

                p {
                    padding: 0rem;
                    min-width: 1rem;
                }
            }
        }
    }
`;

export const MyBag = styled.div`
    gap: 0.5rem;
    margin-bottom: 10px;

    h3 {
        font-weight: 700;
        font-size: 1rem;
    }

    span {
        font-weight: 500;
        font-size: 1rem;
    }
`;

export const CheckOut = styled.div`
    width: 300px;
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;

    a {
        height: 35px;
        width: 49%;
        margin-bottom: 10px;
        margin-top: 20px;

        button {
            margin: 0;
            height: 35px;
        }

        &:first-child button {
            background-color: ${({ theme }) => theme.header};
            border: 1px solid ${({ theme }) => theme.secondary};
            color: ${({ theme }) => theme.secondary};

            &:hover {
                background-color: ${({ theme }) => theme.primary};
            }
        }
    }
`;
