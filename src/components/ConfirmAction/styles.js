import { styled } from "styled-components";

export const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, .5);

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const ContentConfirmAction = styled.div`
    width: 40rem;
    height: 24rem;

    background: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: .6rem;
    padding: 1.6rem;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    > p {
        margin-top: 2.4rem;
        font-size: 1.6rem;
        text-align: center;
        font-weight: 700;
    }

    > .actions-buttons {
        display: flex;
        gap: .8rem;

        width: 100%;
    }
`;