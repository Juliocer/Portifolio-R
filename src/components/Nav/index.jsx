import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import Git from "../../assets/icone/github.png";
import Linkedin from "../../assets/icone/linkedin.png";
import { Button } from "../Button";

import {
  Wrapper,
  Container,
  Navegacao,
  Row,
  Li,
  LiItem,
  Menu,
  MeuNome,
  Img,
  MobileIcon,
  MobileMenu,
} from "./styles";

const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  // Detecta redimensionamento da tela para aplicar comportamento dinâmico
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false); // fecha o menu se voltar pro desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper>
      <Container>
        <Navegacao>
          {/* Nome do site */}
          <Row>
            <MeuNome onClick={() => handleClick("/")}>Júlio César</MeuNome>
          </Row>

          {/* Ícone do menu (visível apenas no mobile) */}
          <MobileIcon onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          {/* Menu Desktop */}
          {!isMobile && (
            <Li>
              <LiItem>
                <Menu onClick={() => handleClick("/")}>Home</Menu>
              </LiItem>
              <LiItem>
                <Menu onClick={() => handleClick("/sobre")}>
                  Sobre+Formação
                </Menu>
              </LiItem>
              <LiItem>
                <Menu onClick={() => handleClick("/projetos")}>
                  Galeria de Projetos
                </Menu>
              </LiItem>
              <LiItem>
                <Menu onClick={() => handleClick("/contato")}>Contato</Menu>
              </LiItem>
              <LiItem>
                <Button
                  onClick={() => handleClick("/contato")}
                  title="Entre em Contato"
                  variant="secundario"
                />
              </LiItem>
              <LiItem>
                <Menu
                  href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-santos-franco/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img src={Linkedin} alt="Linkedin" />
                </Menu>
              </LiItem>
              <LiItem>
                <Menu
                  href="https://github.com/Juliocer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img src={Git} alt="GitHub" />
                </Menu>
              </LiItem>
            </Li>
          )}
        </Navegacao>

        {/* Menu Mobile (dropdown) */}
        {isMobile && isOpen && (
          <MobileMenu>
            <Menu onClick={() => handleClick("/")}>Home</Menu>
            <Menu onClick={() => handleClick("/sobre")}>Sobre+Formação</Menu>
            <Menu onClick={() => handleClick("/projetos")}>
              Galeria de Projetos
            </Menu>
            <Menu onClick={() => handleClick("/contato")}>Contato</Menu>

            {/* Botão e ícones no menu mobile */}
            <Button
              onClick={() => handleClick("/contato")}
              title="Entre em Contato"
              variant="secundario"
            />
            <Row style={{ marginTop: "1rem", gap: "1rem" }}>
              <a
                href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-santos-franco/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img src={Linkedin} alt="Linkedin" />
              </a>
              <a
                href="https://github.com/Juliocer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img src={Git} alt="GitHub" />
              </a>
            </Row>
          </MobileMenu>
        )}
      </Container>
    </Wrapper>
  );
};

export { Nav };
