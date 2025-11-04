import React, { useEffect, useState } from 'react'

import { Wrapper, Container, ContainerMenu, ContainerRepositorio, Imagem, Row, Colmn, Menu, Paragrafo, Link, PaginationContainer, PageButton } from "./styles";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Section = ({ title, paragrafo }) => {
    const [repos, setRepos] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const perPage = 4;

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/users/Juliocer/repos?per_page=${perPage}&page=${page}&sort=updated&direction=desc`
                );
                const data = await response.json();
                setHasMore(data.length === perPage);
                setRepos(data);
            } catch (error) {
                console.error('Erro ao buscar repositórios:', error);
            }
        };
        fetchRepos();
    }, [page])
    
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
                        {repos.length > 0 ? (
                            repos.map((repo) => (
                                <React.Fragment key={repo.id}>

                                    <Row>
                                        <Colmn variant='secundario'>
                                            <Menu variant='secundario'> {repo.name} </Menu>
                                            <Paragrafo variant='secundario'> {repo.description ? repo.description : 'Sem descrição disponível.'}{' '} </Paragrafo>
                                            <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">Ver mais</Link>
                                        </Colmn>
                                    </Row>

                                </React.Fragment>
                            ))
                        ) : (
                            <p>Carregando Projetos...</p>
                        )}
                    </ContainerRepositorio>

                    <PaginationContainer>
                        <PageButton
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                        >
                            <ChevronLeft size={32} />
                        </PageButton>
                        <PageButton
                            onClick={() => setPage((p) => p + 1)}
                            disabled={!hasMore}
                        >
                            <ChevronRight size={32} />
                        </PageButton>
                    </PaginationContainer>
                    
                </Container>
            </Wrapper>
        </>
    )
}

export { Section }

