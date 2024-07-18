import styled, { css } from 'styled-components';

const colors = {
  primary: '#565656',
  secondary: '#E41050',
  border: '#e4105D',
  text: '#FFFFFF',
};

export const ButtonContainer = styled.button`
  background: ${({ variant }) => variant === "primary" ? colors.primary : colors.secondary};
  border-radius: 22px;
  position: relative;
  color: ${colors.text};
  padding: ${({ variant }) => variant === "primary" ? '8px 16px' : '0'};
  min-width: ${({ variant }) => variant === "primary" ? '200px' : '167px'};
  height: ${({ variant }) => variant !== "primary" ? '40px' : 'auto'};
  width: 100%;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease, opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  ${({ variant }) => variant !== "primary" && css`
    &::after {
      content: '';
      position: absolute;
      border: 1px solid ${colors.border};
      top: -5px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 22px;
      box-sizing: border-box;
    }
  `}
`;
