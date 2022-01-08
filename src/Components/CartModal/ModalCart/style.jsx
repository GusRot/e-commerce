import styled from "styled-components";

export const ModalCartContainer = styled.div`
    flex-direction: column;

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
    margin-left: -145px;
    gap: 0.5rem;

    h3 {
        font-weight: 600;
    }
`;

export const MyOrder = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;

    h3 {
        display: none;
    }
`;

export const CheckOut = styled.div`
    width:100%
    display:flex;
    gap:0.5rem;
    justify-content: space-between;

    button {
        height: 30px;
        width:49%;
        margin-bottom: 10px;
        margin-top: 20px;


        &:first-child {
            background-color: ${({ theme }) => theme.header};
            border: 1px solid ${({ theme }) => theme.secondary};

            &:hover {
                background-color: ${({ theme }) => theme.primary};
            }
            
        }
    
    }
`;
