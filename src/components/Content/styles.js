import { styled } from "styled-components";

export const Container = styled.div`
    grid-area: content;
    width: 100%;
    min-width: 34rem;
    height: 100%;
    padding: .8rem;

    overflow-y: auto;
    
    &::-webkit-scrollbar {
        width: 1.2rem;
        background: ${({ theme }) => theme.COLORS.GRAY_300};  
    }

    &&::-webkit-scrollbar-trac {
        background: orange;
    }

    &::-webkit-scrollbar-thumb {
    background: #CCC; 
    border-radius: .2rem;
    }
`;

export const ContentInner = styled.div`
    width: 100%;
    min-width: 34rem;
    height:auto;

    border-radius: .8rem;
    padding: 4rem 2.4rem;
    background: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-box-shadow: -2px 0px 9px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: -2px 0px 9px -4px rgba(0,0,0,0.75);
    box-shadow: -2px 0px 9px -4px rgba(0,0,0,0.75);
`;


export const ButtonBack = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .4rem;
    
    > div {
        width: 1.6rem;
        height: 1.6rem;

        > svg {
            width: 100%;
            height: 100%;
            display: inline-block;

            fill: ${({ theme }) => theme.COLORS.YELLOW};
        }
    }

    a {
        color: ${({ theme }) => theme.COLORS.BLACK};
        font-size: 1.6rem;
        font-weight: 700;
    }
`;

export const Title = styled.h2`
    font-size: 2.4rem;
    margin: 4.0rem 0;
`;