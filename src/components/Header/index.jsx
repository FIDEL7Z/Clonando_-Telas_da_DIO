import React from 'react';
import logo from '../../assets/logo.png'
import { Button } from '../Button';
import {
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';
// Adicione a importação do logo

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="logo da dio"/>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='#'>Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
            </Row>
        </Container>
    </Wrapper>
  );
}

export { Header };
