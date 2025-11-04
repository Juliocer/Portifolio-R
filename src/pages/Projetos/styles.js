import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    box-sizing: border-box;
    background-color: #f8f6f6;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ variant }) => variant === 'secundario' && css`
        display: flex;
        flex-direction: column;
    `}
`

export const Container = styled.div`
    width: 1140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8rem 0 5rem 0;

    ${({ variant }) => variant === 'secundario' && css`
        padding: 1rem 0 1rem 0;
        background-color: #dfdddd;
        margin: .5rem 0;
    `}
`

export const Row = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 80%;
    gap: 1rem;

    ${({ variant }) => variant === 'secundario' && css`
        width: 100%;
        padding: 2rem;
    `}
`

export const Colmn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Menu = styled.h1`
    font-family: 'Open-Sans';
    font-style: normal;
    font-size: 2rem;
    color: #000;
    margin: 0 0 2rem 0;
`

export const ImageBackground = styled.img`
    width: 20rem;
    flex: 1;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 0.75rem;

    div {
        display: flex;
        flex-direction: column;
        margin-left: 0.75rem;
        gap: .2rem;
    }

    h4{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.563rem;
        color: #000;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1rem;
    }

    a {
        text-decoretion: none;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1rem;
    }
`
export const UserPicture = styled.img `
    width: 5rem;
    height: 5rem;
    border-radius: .5rem;
    border: .1rem solid #000;
`

export const PostInfo = styled.div`
    margin-bottom: 1rem;

    h4{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.5rem;
        color: #000;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 0.85rem;
        line-height: 1rem;
    }
`

export const HasInfo = styled.div`
    margin-top: .5rem;

    h4{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 1rem;
        color: #000;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.375rem;
    }
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;

  ${({variant}) => variant === 'cima' && css`
        margin: 0 0 1.5rem 0;
    `}
`;

export const PageButton = styled.button`
  background: ${({ disabled }) => (disabled ? '#323232' : '#000')};
  border: none;
  color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: #565656;
    transform: scale(1.05);
  }
`;

