import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 1140px;
    display: flex;
    flex-direction: column;
    padding: 5rem 0 5rem 0;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    border-bottom: 0.063rem solid #000;
    margin: 1rem 0;

    ${({ variant }) => variant === 'secundario' && css`
        border: none;
        cursor: pointer;
        width: 100%;
        margin: 0 0 .5rem 0;
        gap: .5rem;
    `}
`

export const Colmn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    flex: 1;
`

export const Menu = styled.h1`
    font-family: 'Open-Sans';
    font-style: normal;
    font-size: 1.5rem;
    color: #000;
    margin: 0;
    margin: 0 0 1rem 0;
`

export const Paragrafo = styled.p`
    font-family: 'Open-Sans';
    font-style: normal;
    font-size: 1.5rem;
    color: #000;
    margin: 0 0 .5rem 0;

    ${({ variant }) => variant === 'secundario' && css`
        font-size: 1.25rem;
    `}
`

export const Link = styled.a`
    font-family: 'Open-Sans';
    font-style: normal;
    font-size: 1.5rem;
    line-height: 25px;
    color: #000;
    text-decoration: none;

    ${({ variant }) => variant === 'secundario' && css`
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: start;
        border: none;
        cursor: pointer;
        width: 100%;
        margin: 0 0 .5rem 0;
        gap: .5rem;
    `}
`

export const Img = styled.img`
    width: 1.25rem;
`

