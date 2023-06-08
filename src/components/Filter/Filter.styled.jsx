import styled from '@emotion/styled';

export const FilterBlock = styled.div` 
  display: flex;
  flex-direction: column;
  `;

export const FilterLabel = styled.label` 
  margin-bottom: 10px;
  font-size: 20px;
  `;

export const FilterInput = styled.input` 
  padding: 5px;
  margin-bottom: 15px;
  width: 100%;
  max-width: 300px;

  outline: none;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 0px 4px 1px rgba(5, 131, 131, 0.6);
  transition: box-shadow 200ms;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0px 0px 7px 6px rgba(5, 131, 131, 0.24);
  `;

// .filter {
//   display: flex;
//   flex-direction: column;
// }
// .label {
//   margin-bottom: 10px;
//   font-size: 20px;
// }

// .input {
//   padding: 5px;
//   margin-bottom: 15px;
//   width: 100%;
//   max-width: 300px;

//   outline: none;
//   border: none;
//   border-radius: 3px;
//   box-shadow: 0px 0px 4px 1px rgba(5, 131, 131, 0.6);
//   transition: box-shadow 200ms;

//   &:hover,
//   &:focus,
//   &:active {
//     box-shadow: 0px 0px 7px 6px rgba(5, 131, 131, 0.24);
//   }
// }