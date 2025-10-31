import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    box-sizing: border-box;
    background-color: #f8f6f6;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 1140px;
    display: flex;
    flex-direction: column;
    padding: 8rem 0 2rem 0;
`

export const Colmn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const H1 = styled.h1`
    font-family: 'Open-Sans';
    font-style: normal;
    font-size: 3rem;
    color: #000;
    margin: 0;

    ${({ variant }) => variant === "certificado" && css`
        text-align: center;
        font-size: 2.5rem;
        padding: 1rem 0
    `}
`

export const Paragrafo = styled.p`
    font-family: 'Open-Sans';
    font-style: normal;
    font-size: 1.5rem;
    color: #000;
    margin: 0;

    ${({ variant }) => variant === 'pequenoParagrafo' && css`
        font-size: 1.3rem;
        text-align: center;
        white-space: pre-line;
        width: 90%;
        padding: 0 0 1rem 0; 
    `}
`

export const Img = styled.img`
    width: 17rem;
`

export const ImgCentificado = styled.img`
    width: 17rem;
    
`

export const ContainerCertificado = styled.div`
    padding: 5rem 0;
    display: felx;
    flex-direction: colmn;
    align-items: center;
    justify-content: center;
`

export const GaleriadoCertificado = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: .5rem;
`

export const Certificados = styled.div`
    display:flex;
    align-items: center; 
    justify-Content: center;
    padding: .5rem 0;
`