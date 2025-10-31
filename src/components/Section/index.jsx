import React from 'react'

import { Wrapper, Container, ContainerMenu, ContainerRepositorio, Imagem, Row, Colmn, Menu, Paragrafo, Link } from "./styles";
const Section = ({ title, paragrafo, titleRepositorio, paragrafoRepositorio }) => {
    return (
        <>
            <Wrapper>
                <Container>
                    <ContainerMenu>
                        <Colmn>
                            <Menu>{title}</Menu>
                            <Paragrafo>{paragrafo}</Paragrafo>
                        </Colmn>
                    </ContainerMenu>
                    <ContainerRepositorio>
                        <Row>
                            <Imagem src='#' />
                            <Colmn variant='secundario'>
                                <Menu variant='secundario'> {titleRepositorio} </Menu>
                                <Paragrafo variant='secundario'> {paragrafoRepositorio} </Paragrafo>
                                <Link>Ver mais</Link>
                            </Colmn>
                        </Row>
                        <Row>
                            <Imagem src='#' />
                            <Colmn variant='secundario'>
                                <Menu variant='secundario'> {titleRepositorio} </Menu>
                                <Paragrafo variant='secundario'> {paragrafoRepositorio} </Paragrafo>
                                <Link>Ver mais</Link>
                            </Colmn>
                        </Row>
                    </ContainerRepositorio>
                </Container>
            </Wrapper>
        </>
    )
}

export { Section }

