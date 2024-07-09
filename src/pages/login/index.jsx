import React from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { 
  Column, 
  Container, 
  CriarText, 
  EsqueciText, 
  SubTitleLogin, 
  Row, 
  Title, 
  TitleLogin, 
  Wrapper 
} from './styles';

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts,
            dominar as principais tecnologias e entrar mais rápido nas 
            empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça login para acessar e modificar suas informações</SubTitleLogin>
            <form>
              <Input placeholder="E-mail" name="email" />
              <Input placeholder="Senha" type="password" name="password" />
              <Button title="Entrar" variant="secondary" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
