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
    align-items: start;
    justify-content: center;
`

export const Colmn = styled.div`
    display: flex;
    flex-direction: column;

    ${({ variant }) => variant === "secundario" && css`
        width: 55%;
        display: flex;
        padding-left: .5rem;
    `}
`

export const ContainerMenu = styled.div`
    padding: 0 0 3rem 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
`

export const Menu = styled.h1`
    font-family: 'Open-Sans';
    font-style: normal;
    font-size: 3rem;
    color: #000;
    margin: 0;
    margin: 0 0 1rem 0;

    ${({ variant }) => variant === "secundario" && css`
        margin: 0 0 .5rem 0;
        font-size: 2rem;
    ` }
`

export const Paragrafo = styled.p`
    font-family: 'Open-Sans';
    font-style: normal;
    font-size: 1.5rem;
    color: #000;
    margin: 0;

    ${({ variant }) => variant === "secundario" && css`
        margin: 0 0 .5rem 0;
    ` }
`

export const ContainerRepositorio = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`

export const Imagem = styled.img`
    width: 40%;
    height: auto;
    background-color: #000;
`

export const Link = styled.a`
    font-family: 'Open-Sans';
    font-size: 1.3rem;
    color: #000;
    text-decoration: none;
    text-align: center;
    border: 1px solid #000;
    padding: .1rem 1rem;

    &:hover{
        color: #fff;
        background-color: #000;
        cursor: pointer;
    }
`
