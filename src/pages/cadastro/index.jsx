import { MdEmail, MdLock } from 'react-icons/md';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { api } from '../../services/api';

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
  TituloDebaixo
} from './styles';

const schema = yup.object({
  email: yup.string().email('Email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Cadastro = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = formData => {
   try{
 const {data} = api.get(`users?email=${formData.email}&password=${formData.password}`);
       console.log('retorno api ', data);
   }
   catch{
   alert('Erro ao acessar, tente novamnete');
   }
  };

  const handleClickSignUp = () => {
    navigate('/feed');
  }

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
            <TitleLogin>Comece agora  gratis</TitleLogin>
            <SubTitleLogin>Crie sua conta.</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input 
                name="email" 
                errorMessage={errors.email?.message} 
                control={control} 
                placeholder="E-mail" 
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
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
           <TituloDebaixo>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TituloDebaixo>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
