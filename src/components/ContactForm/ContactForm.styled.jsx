import styled from '@emotion/styled';
import { Form as FormikForm, Field, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
  font-size: 20px;
`;

export const FormField = styled(Field)`
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
  }
`;
export const ErrorMessage = styled(FormikError)`
  max-width: 400px;
  color: #9e0202;
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  align-self: start;
  padding: 10px;
  margin-top: 10px;

  background-color: teal;
  border: none;
  outline: none;
  color: aliceblue;
  border-radius: 5px;

  transform: scale(1);
  transition: transform 200ms;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

// .ContactForm {
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

// .button {
//   align-self: start;
//   padding: 10px;
//   margin-top: 10px;

//   background-color: teal;
//   border: none;
//   outline: none;
//   color: aliceblue;
//   border-radius: 5px;

//   transform: scale(1);
//   transition: transform 200ms;

//   &:hover,
//   &:focus {
//     transform: scale(1.1);
//   }
// }
