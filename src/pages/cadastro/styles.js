import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 88%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ErrorText = styled.p`
    color: red;
    font-size: 12px;
`

export const Wrapper = styled.div`
    max-width: 300px;
`;

export const Column = styled.div`
    flex: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;
`;
export const TitleLogin = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 5px;
    line-height: 25px;
   
`;
export const SubTitleLogin = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
   
`;
export const TituloDebaixo = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 16px;
`;

export const EsqueciText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-right: 120px;
    line-height: 26px;
    margin: 0; /* Remove a margem padrão */
   color: #ffffff
`;

export const EsqueciCriarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px; /* Espaçamento entre os textos */
`;

export const CriarText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    margin: 0; /* Remove a margem padrão */
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
   color:#23DD7A
`;
