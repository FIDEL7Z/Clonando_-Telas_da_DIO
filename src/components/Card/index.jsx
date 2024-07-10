import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import { 
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

const Card = () => {
    return (
        <CardContainer>
          <ImageBackground src="https://hermes.digitalinnovation.one/public/components/pages/home/header/banner-play.png">
                    </ImageBackground>
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/103468557?v=4' />
                    <div>
                        <h4>Jefferson Fidelis</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para Curso de HTML e CSS</h4>
                    <p>
                        Projeto feito no curso de HTML e CSS bootcamp DIO do Global Avanade...
                         <strong>Saiba Mais</strong>
                    </p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    );
};

export {Card} 
