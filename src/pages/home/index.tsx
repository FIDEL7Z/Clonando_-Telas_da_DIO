import React from 'react';

import { useNavigate } from 'react-router-dom';
import bannerImagem from '../../assets/banner.png';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { Container, TextContent, Title, TitleHighLight } from './styles';

const Home = () => {

const navigate = useNavigate();
const handleClickSignIn = () => {
    navigate('/login')
}

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente
              <br />
            </TitleHighLight>
            O seu futuro global agora!!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais
            inovadoras do mundo e encare seu novo desafio profissional,
            evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
        </div>
        <div>
          <img src={bannerImagem} alt="imagem principal" />
        </div>
      </Container>
    </>
  );
};

export { Home };
