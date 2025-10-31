import styled from "styled-components";

export const Wrapper = styled.div`
    box-sizing: border-box;
    position: fixed;
    width: 100%;    
    background-color: #f8f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Container = styled.div`
    width: 100%;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
`

export const Navegacao = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Li = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 2rem;    
`

export const LiItem = styled.li`
    background: transparent;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`

export const Menu = styled.a`
    font-family: 'Open-Sans';
    font-style: normal;
    font-size: 1.5rem;
    line-height: 25px;
    color: #000;
    text-decoration: none;
`

export const MeuNome = styled.h1`
    font-family: 'Open-Sans';
    font-style: normal;
    font-size: 1.5rem;
    color: #000;
    cursor: pointer;
`

export const Img = styled.img`
    width: 1.875rem;
`