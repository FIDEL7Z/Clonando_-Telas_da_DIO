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

const Card = ({ user = {} }) => {
    return (
        <CardContainer>
            <ImageBackground src="https://hermes.digitalinnovation.one/public/components/pages/home/header/banner-play.png" />
            <Content>
                <UserInfo>
                    <UserPicture src={user.image || 'https://via.placeholder.com/150'} />
                    <div>
                        <h4>{user.name || 'Usuário Desconhecido'}</h4>
                        <p>{user.time || 'Tempo desconhecido'}</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>{user.projectTitle || 'Título do Projeto'}</h4>
                    <p>
                        {user.projectDescription || 'Descrição do projeto...'}
                        <strong> Saiba Mais</strong>
                    </p>
                </PostInfo>
                <HasInfo>
                    <h4>{user.hashtags || '#Tags'}</h4>
                    <p>
                        <FiThumbsUp /> {user.likes || 0}
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    );
};

export { Card };
