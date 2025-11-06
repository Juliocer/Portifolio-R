import styled from "styled-components";
import Breakpoints from "../../styles/breakpoints";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #f8f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media ${Breakpoints.tablet} {
    position: sticky;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  @media ${Breakpoints.desktop} {
    padding: 1rem 3rem;
  }

  @media ${Breakpoints.tablet} {
    padding: 0.8rem 1rem;
  }

  @media ${Breakpoints.mobileM} {
    padding: 0.5rem 0.8rem;
  }
`;

export const Navegacao = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Li = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media ${Breakpoints.tablet} {
    display: none; /* esconde o menu principal no mobile */
  }
`;

export const LiItem = styled.li`
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;

export const Menu = styled.a`
  font-size: 1.1rem;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #333;
  }

  @media ${Breakpoints.mobileM} {
    font-size: 0.95rem;
  }

  @media ${Breakpoints.desktop} {
    font-size: 1.25rem;
  }
`;

export const MeuNome = styled.h1`
  font-size: 1.5rem;
  color: #000;
  cursor: pointer;
  font-weight: 600;
  transition: font-size 0.3s ease;

  @media ${Breakpoints.mobileM} {
    font-size: 1.2rem;
  }

  @media ${Breakpoints.desktop} {
    font-size: 1.8rem;
  }
`;

export const Img = styled.img`
  width: 1.875rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media ${Breakpoints.mobileM} {
    width: 1.5rem;
  }

  @media ${Breakpoints.desktop} {
    width: 2rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  cursor: pointer;
  color: #000;
  z-index: 1100;

  @media ${Breakpoints.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media ${Breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f8f6f6;
    width: 100%;
    padding: 1rem 0;
    border-top: 1px solid #ddd;
    animation: slideDown 0.3s ease forwards;

    a {
      margin: 0.5rem 0;
      font-size: 1.1rem;
      text-decoration: none;
      color: #000;
      transition: color 0.2s ease;

      &:hover {
        color: #333;
      }
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;