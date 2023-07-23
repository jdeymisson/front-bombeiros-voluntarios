import { styled } from "styled-components";

export const Container = styled.select`
    background: ${({ theme }) => theme.COLORS.RED_100};
    width: 100%;
    padding: .8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: 0;
    outline: none;
    border-radius: .8rem;
    height: 4rem;

    font-size: 1.4rem;

    &::placeholder{
        color: #ddd;
    }

    > option {
        background: ${({ theme }) => theme.COLORS.RED_100};
        font-size: 1.4rem;

        &:checked {
            background: ${({ theme }) => theme.COLORS.YELLOW};
            color: ${({ theme }) => theme.COLORS.BLACK};
        }
    }  
`;