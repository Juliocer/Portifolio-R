import styled, { css } from "styled-components";
import Breakpoints from "../../styles/breakpoints";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ variant }) =>
    variant === "secundario" &&
    css`
      display: flex;
      flex-direction: column;
    `}

  @media ${Breakpoints.tablet} {
    padding: 0 1rem;
  }
`;

export const Container = styled.div`
  width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem 0 5rem 0;

  ${({ variant }) =>
    variant === "secundario" &&
    css`
      padding: 1rem 0;
      background-color: #f8f6f6;
      margin: 0.5rem 0;
    `}

  @media ${Breakpoints.desktop} {
    width: 90%;
  }

  @media ${Breakpoints.tablet} {
    width: 100%;
    padding: 4rem 0;
  }

  @media ${Breakpoints.mobileM} {
    padding: 3rem 0;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
  gap: 1rem;

  ${({ variant }) =>
    variant === "secundario" &&
    css`
      width: 100%;
      padding: 2rem;
    `}

  @media ${Breakpoints.tablet} {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2rem;
  }

  @media ${Breakpoints.mobileM} {
    gap: 1.2rem;
  }
`;

export const Colmn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${Breakpoints.tablet} {
    align-items: center;
    text-align: center;
  }
`;

export const Menu = styled.h1`
  font-family: "Open-Sans";
  font-style: normal;
  font-size: 2rem;
  color: #000;
  margin: 0 0 2rem 0;

  @media ${Breakpoints.tablet} {
    font-size: 1.8rem;
    text-align: center;
  }

  @media ${Breakpoints.mobileM} {
    font-size: 1.5rem;
  }
`;

export const ImageBackground = styled.img`
  width: 20rem;
  flex: 1;

  @media ${Breakpoints.tablet} {
    width: 15rem;
  }

  @media ${Breakpoints.mobileM} {
    width: 12rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media ${Breakpoints.tablet} {
    padding: 1.5rem;
  }

  @media ${Breakpoints.mobileM} {
    padding: 1rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.75rem;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 0.75rem;
    gap: 0.2rem;
  }

  h4 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    color: #000;
  }

  p {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    font-family: "Open Sans";
    font-size: 1rem;
    color: #000;

    &:hover {
      text-decoration: underline;
    }
  }

  @media ${Breakpoints.tablet} {
    flex-direction: column;
    align-items: center;
    text-align: center;

    div {
      margin-left: 0;
    }
  }
`;

export const UserPicture = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid #000;

  @media ${Breakpoints.tablet} {
    width: 4.5rem;
    height: 4.5rem;
  }

  @media ${Breakpoints.mobileM} {
    width: 4rem;
    height: 4rem;
  }
`;

export const PostInfo = styled.div`
  margin-bottom: 1rem;

  h4 {
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 1.5rem;
    color: #000;
  }

  p {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 0.85rem;
  }

  @media ${Breakpoints.tablet} {
    text-align: center;
  }
`;

export const HasInfo = styled.div`
  margin-top: 0.5rem;
  text-align: left;

  h4 {
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 0.75rem;
    color: #000;
  }

  p {
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 1rem;
  }

  @media ${Breakpoints.tablet} {
    text-align: center;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;

  ${({ variant }) =>
    variant === "cima" &&
    css`
      margin: 0 0 1.5rem 0;
    `}

  @media ${Breakpoints.mobileM} {
    gap: 0.7rem;
  }
`;

export const PageButton = styled.button`
  background: ${({ disabled }) => (disabled ? "#323232" : "#000")};
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

  @media ${Breakpoints.mobileM} {
    width: 40px;
    height: 40px;
  }
`;
