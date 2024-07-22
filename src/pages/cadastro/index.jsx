import { MdEmail, MdAccountCircle, MdLock } from 'react-icons/md';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { 
  Column, 
  Container, 
  CriarText, 
  EsqueciText, 
  SubTitleLogin, 
  Row, 
  Title, 
  TitleLogin, 
  Wrapper,
  TituloDebaixo,
  EsqueciCriarContainer
} from './styles';

const schema = yup.object({
  email: yup.string().email('Email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  name: yup.string().min(3, 'Nome completo').required('Campo obrigatório'),
}).required();

const Cadastro = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = () => {
    setSuccessMessage('Usuário cadastrado com sucesso');
    setTimeout(() => {
      navigate('/login');
    }, 3000); // Redireciona após 3 segundos
  };

  const handleClickSignUp = () => {
    navigate('/login');
  };

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
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Crie sua conta.</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input 
                name="name" 
                errorMessage={errors.name?.message} 
                control={control} 
                placeholder="Nome" 
                type="text" 
                leftIcon={<MdAccountCircle />} 
              />
              <Input 
                name="email" 
                errorMessage={errors.email?.message} 
                control={control} 
                placeholder="E-mail" 
                type="email" 
                leftIcon={<MdEmail />} 
              />
              <Input 
                name="password" 
                errorMessage={errors.password?.message} 
                control={control} 
                placeholder="Senha" 
                type="password" 
                leftIcon={<MdLock />} 
              />
              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </form>
            {successMessage && <p>{successMessage}</p>}
            <TituloDebaixo>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TituloDebaixo>
            <EsqueciCriarContainer>
              <EsqueciText>Já tenho conta.</EsqueciText>
              <CriarText onClick={handleClickSignUp}>Fazer login</CriarText>
            </EsqueciCriarContainer>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
