import React from "react"

import { Button } from "../Button"; 
import {
    Wrapper,
    Container,
    Navegacao,
    Row,
    Li,
    LiItem,
    Menu,
    MeuNome
} from "./styles";

const Nav = () => {
    return (
        <Wrapper>
            <Container>
                <Navegacao>
                    <Row>
                        <MeuNome>
                            Júlio César
                        </MeuNome>
                    </Row>
                    <Row>
                        <Li>
                            <LiItem>
                                <Menu href="#">Home</Menu>
                            </LiItem>
                            <LiItem>
                                <Menu href="#">Sobre</Menu>
                            </LiItem>
                            <LiItem>
                                <Menu href="#">Formação</Menu>
                            </LiItem>
                            <LiItem>
                                <Menu href="#">Galeria de Projetos</Menu>
                            </LiItem>
                            <LiItem>
                                <Menu href="#">Contato</Menu>
                            </LiItem>
                            <LiItem>
                                <Button title="Entre em Contato"/>
                            </LiItem>
                        </Li>
                    </Row>
                </Navegacao>
            </Container>
        </Wrapper>
    )
}

export { Nav }
