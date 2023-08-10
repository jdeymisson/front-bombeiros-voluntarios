import { styled } from "styled-components";

export const Container =  styled.div `
    width: 100%;
    
    display: flex;
    flex-direction: column;
`

export const InputSeachContainer = styled.div`
    background: ${({ theme }) => theme.COLORS.GRAY_100};

    width: 100%;
    height: 4rem;
    border-radius: .8rem;

    display: flex;
    align-items: center;

    > div {
        width: 4rem;
        padding: 1.2rem;
        > svg {
            width: 100%;
            height: 100%;

            fill: ${({ theme }) => theme.COLORS.GRAY}; ;
        }
    }

    .container-option {
        width: 100%;
        background-color: red;
        bottom: 0%;
        z-index: 1;
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

export const DataOptionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    border-radius: .4rem;

    margin-top: .2rem;
    background: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const DataOption = styled.div`
    width: 100%;
    height: 3.2rem;

    padding: .8rem 1.6rem;
    border-radius: .4rem;

    background: ${({ theme }) => theme.COLORS.GRAY_100};
    
    cursor: pointer;

    transition: filter .2s ease;

    &:hover {
        filter: brightness(.8);
    }
`;