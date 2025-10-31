import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    box-sizing: border-box;
    font-family: 'Open-Sans';
    background: #000;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #fff;
    padding: .5rem 1.5rem;

    &:hover{
        background-color: #565656;
    }

    ${({variant}) => variant === "primary" && css`
        background: transparent;
        color: #000;
        border: 1px solid #000;
        margin-left: 1rem;

        &:hover{
            background-color: #000;
            color: #fff;
        }
    `}

    ${({variant}) => variant === "estiloLink" && css`
        background: transparent;
        color: #000;
        font-size: 1.2rem;
        margin: 0;
        padding: 0;

        &:hover{
            color: #fff;
        }
    `}
`

