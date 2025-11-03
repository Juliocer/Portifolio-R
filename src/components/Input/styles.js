import styled, { css } from "styled-components";

export const InputContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 2.5rem;
    border: 1px solid #000;
    padding: 0.1rem .5rem;
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
    height: 100%;

    &:focus {
        outline: none;        
        border-color: #000;   
        box-shadow: none;     
    }
`

export const ErrorText = styled.p`
    color: #ff0000;
    font-size: 12px;
    margin: 0 0 1rem 0;
`

export const TextareaText = styled.textarea`
    background-color: transparent;
    color: #000;
    border: none;
    width: 100%;
    height: 100%; 
    resize: none; 

    &:focus {
        outline: none;        
        border-color: #000;   
        box-shadow: none;     
    }
`;