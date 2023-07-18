import { styled } from "styled-components";


export const Container = styled.div `
    height: 100%;

    .controll-admin {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3.2rem;

            .pen-edit {
                fill: ${({ theme }) => theme.COLORS.YELLOW};
                cursor: pointer;
            }

            .trash-user {
                fill: ${({ theme }) => theme.COLORS.BLACK};
                cursor: pointer;
            }
        }
`;