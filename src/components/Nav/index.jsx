import React from "react"
import { useNavigate } from 'react-router-dom';

import Git from '../../assets/icone/github.png';
import Linkedin from '../../assets/icone/linkedin.png';

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
    Img
} from "./styles";

const Nav = () => {
    const navigate = useNavigate();
    const handleClickSobre = () => {
        navigate('/sobre')
    }

    const handleClickProjetos = () => {
        navigate('/projetos')
    }

    const handleClickContato = () => {
        navigate('/contato')
    }

    const handleClickHome = () => {
        navigate('/')
    }

    return (
        <Wrapper>
            <Container>
                <Navegacao>
                    <Row>
                        <MeuNome onClick={handleClickHome} >Júlio César</MeuNome>
                    </Row>
                    <Row>
                        <Li>
                            <LiItem><Menu href="#">Home</Menu></LiItem>
                            <LiItem><Menu onClick={handleClickSobre}>Sobre+Formação</Menu></LiItem>
                            <LiItem><Menu onClick={handleClickProjetos}>Galeria de Projetos</Menu></LiItem>
                            <LiItem><Menu onClick={handleClickContato}>Contato</Menu></LiItem>
                            <LiItem><Button onClick={handleClickContato} title="Entre em Contato" variant='secundario' /></LiItem>
                            <LiItem><Menu href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-santos-franco/" target="_blank" rel="noopener noreferrer"><Img src={Linkedin} alt="Icone do Linkedin"/></Menu></LiItem>
                            <LiItem><Menu href="https://github.com/Juliocer" target="_blank" rel="noopener noreferrer"><Img src={Git} alt="Icone do GitHub"/></Menu></LiItem>
                        </Li>
                    </Row>
                </Navegacao>
            </Container>
        </Wrapper>
    )
}


export { Nav }
