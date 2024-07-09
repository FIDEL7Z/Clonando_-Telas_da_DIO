import styled, { css } from 'styled-components';


const colors = {
  primary: '#565656',
  secondary: '#E41050',
  border: '#e4105D',
  text: '#FFFFFF',
};

export const ButtonContainer = styled.button`
  background: ${colors.primary};
  border-radius: 22px;
  position: relative;
  color: ${colors.text};
  padding: 8px 16px; 
  min-width: 200px;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease, opacity 0.3s ease; 

  ${({ variant }) => variant !== "primary" && css`
    min-width: 167px;
    height: 40px; 
    background: ${colors.secondary};

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }

    &::after {
      content: '';
      position: absolute;
      border: 1px solid ${colors.border};
      top: -5px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 22px;
      box-sizing: border-box; // Garantir que o tamanho seja calculado corretamente
    }
  `}
`;

