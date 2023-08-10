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

export const TextArea = styled.textarea`
    width: 100%;
    padding: .8rem;
    background: ${({ theme }) => theme.COLORS.RED_100};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: 0;
    border-radius: .8rem;
    height: 8rem;

    font-size: 1.4rem;
    resize: none;
    &::placeholder{
        color: #ddd;
    }
`;