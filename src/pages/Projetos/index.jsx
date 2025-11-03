import React, { useEffect, useState } from 'react'
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
import LogoReact from '../../assets/certificados.jpg/certificado-react.jpg'
import LogoHtml from '../../assets/certificados.jpg/certificado-HTML.jpg'

import { Wrapper, Container, Row, Menu, ImageBackground, Content, UserInfo, UserPicture, PostInfo, HasInfo, PaginationContainer, PageButton } from './styles'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projetos = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const perPage = 5;

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
      <Nav />
      <Wrapper variant="secundario" >
        <Container>
          <Menu> Projetos </Menu>

          <PaginationContainer variant='cima'>
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

          {repos.length > 0 ? (
            repos.map((repo) => (
              <React.Fragment key={repo.id}>
                <Container variant='secundario'>

                  <Row variant='secundario'>
                    <ImageBackground src={LogoReact} />
                    <ImageBackground src={LogoReact} />
                    <ImageBackground src={LogoReact} />
                  </Row>
                  <Content key={repo.id}>
                    <UserInfo>
                      <UserPicture src='https://avatars.githubusercontent.com/u/143886237?s=400&u=f9b548593f3d61796f405d3e608518a6bbbddcf2&v=4' />
                      <div>
                        <h4>{repo.owner.login}</h4>
                        <p>Atualizado em {new Date(repo.updated_at).toLocaleDateString('pt-BR')}</p>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >Link para o Git</a>
                      </div>
                    </UserInfo>

                    <PostInfo>
                      <h4>{repo.name}</h4>
                      <p>{repo.description ? repo.description : 'Sem descrição disponível.'}{' '}</p>
                    </PostInfo>

                    <HasInfo>
                      <h4>#{repo.language || 'N/A'}</h4>
                      <p>⭐ {repo.stargazers_count}</p>
                    </HasInfo>
                  </Content>

                </Container>
              </React.Fragment>
            ))
          ) : (
            <p>Carregando Projetos...</p>
          )}

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
      <Footer />
    </>
  )
}

export { Projetos }
