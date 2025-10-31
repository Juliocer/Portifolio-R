import styled, { css } from "styled-components";

export const InputContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 1.75rem;
    border: 1px solid #000;
    padding: .5rem .5rem;

    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    ${({ variant }) => variant === "secundario" && css`
        height: 10rem;
    `}
`

export const InputText = styled.input`
    background-color: transparent;
    color: #000;
    border: none;
    width: 100%;
`


export const ErrorText = styled.p`
    color: #ff0000;
    font-size: 12px;
    margin: 0 0 1rem 0;
`

