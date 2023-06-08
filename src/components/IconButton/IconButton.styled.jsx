import styled from '@emotion/styled';

export const ButtonIcon = styled.button` 
  margin: 0;
  margin-right: 50px;
  padding: 10px;
  border: none;   
  background-color: transparent;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  transform: scale(1);
  transition: transform 200ms;

  &:hover,
  &:focus {
    transform: scale(1.2);
  `;

