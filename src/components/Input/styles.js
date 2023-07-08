import { styled } from "styled-components";

export const  Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    margin-bottom: .8rem;

    font-size: 1.6rem;
`;

export const Input = styled.input`
    width: 100%;
    min-width: 20rem;
    padding: .8rem;
    background: ${({ theme }) => theme.COLORS.RED_100};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: 0;
    border-radius: .8rem;
    height: 4.8rem;

    font-size: 1.6rem;

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
`;