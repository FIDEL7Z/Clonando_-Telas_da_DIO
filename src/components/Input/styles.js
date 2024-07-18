import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px; 
    border-bottom: 1px solid #3b3450;

    display: flex; 
    align-items: center;
    margin-bottom: 20px;
`;
export const ErrorText = styled.p`
    display: block; 
    color: #bf1650;
    margin-top: 8px 0; 

    &::before {
        content: "⚠ ";
        margin-right: 4px;
    }
`;

export const IconContainer = styled.div`
    margin-right: 10px;
`;

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    border: 0; 
    height: 30px;
    width: 100%;
`;
