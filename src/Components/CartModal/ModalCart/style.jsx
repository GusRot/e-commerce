import styled from "styled-components";

export const ModalCartContainer = styled.div`
    flex-direction: column;
    overflow: auto;
    align-items: flex-start !important;

    header {
        height: fit-content;
        min-height: 100px;
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

            div {
                &:first-child {
                    flex-direction: column;
                    align-items: flex-start;

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
    gap: 0.5rem;
    margin-bottom: 10px;

    h3 {
        font-weight: 600;
    }
`;

export const CheckOut = styled.div`
    width:100%
    display:flex;
    gap:0.5rem;
    justify-content: space-between;

    a {
        height: 35px;
        width:49%;
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
