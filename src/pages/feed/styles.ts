import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 88%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
   
`;

export const Title = styled.h3`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
    color: #FFFFFF;
`;

export const TitleHighLight = styled.h3`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;
    color: #FFFFFF;

`
export const Column = styled.div`
    flex:${({flex})=> flex};
    padding-right: 24px;
`;
