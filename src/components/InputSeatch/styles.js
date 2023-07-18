import { styled } from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.GRAY_100};

    width: 100%;
    height: 4rem;
    border-radius: .8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    > div {
        width: 4rem;
        padding: 1.2rem;
        > svg {
            width: 100%;
            height: 100%;

            fill: ${({ theme }) => theme.COLORS.GRAY}; ;
        }
    }
`;

export const Input = styled.input`
    outline: none;
    background: transparent;
    width: 100%;
    height: 100%;
    padding: .4rem .8rem;
    border: 0;
    font-size: 1.4rem;
`;