import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Container, Column, Title, TitleHighLight } from './styles'; 

const Feed = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulando uma chamada de API
    const fetchUsers = async () => {
      const data = [
        {
          name: "Jefferson",
          image: "https://avatars.githubusercontent.com/u/103468557?v=4",
          projectTitle: "Projeto para Curso de HTML e CSS",
          projectDescription: "Projeto feito no curso de HTML e CSS bootcamp DIO do Global Avanade...",
          hashtags: "#HTML #CSS #JavaScript",
          time: "Há 8 minutos",
          likes: 10
        },
        {
          name: "Pedro",
          image: "https://avatars.githubusercontent.com/u/135765803?v=4",
          projectTitle: "Aplicativo React com API do GitHub",
          projectDescription: "Desenvolvimento de um app em React para buscar repositórios do GitHub...",
          hashtags: "#React #API #GitHub",
          time: "Há 15 minutos",
          likes: 20
        },
        {
          name: "Caio",
          image: "https://avatars.githubusercontent.com/u/129773231?v=4",
          projectTitle: "Clone do Netflix",
          projectDescription: "Projeto de clonagem do layout da Netflix utilizando React e CSS...",
          hashtags: "#React #CSS #Clone",
          time: "Há 30 minutos",
          likes: 15
        },
        {
          name: "Freire",
          image: "https://avatars.githubusercontent.com/u/93498458?v=4",
          projectTitle: "API RESTful com Node.js",
          projectDescription: "Criação de uma API RESTful utilizando Node.js e Express...",
          hashtags: "#Node.js #API #Express",
          time: "Há 1 hora",
          likes: 25
        },
        {
          name: "Diogo",
          image: "https://avatars.githubusercontent.com/u/101907751?v=4",
          projectTitle: "E-commerce com Django",
          projectDescription: "Desenvolvimento de um e-commerce completo utilizando Django...",
          hashtags: "#Django #Python #E-commerce",
          time: "Há 2 horas",
          likes: 30
        }
      ];
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          {users.map((user, index) => (
            <Card key={index} user={user} />
          ))}
        </Column>
        <Column flex={1}>
          <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
          {users.map((user, index) => (
            <UserInfo key={index} percentual={80} nome={user.name} image={user.image} />
          ))}
        </Column>
      </Container>
    </>
  );
};

export { Feed };
