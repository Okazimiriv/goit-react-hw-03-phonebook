import styled from '@emotion/styled';
 
export const ContactListBlock = styled.ul`
   padding-left: 0px;
`;

export const ContactItem = styled.li`
  width: 400px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: #fff;
`;

export const ContactInfo = styled.p`
  display: flex;
  font-size: 18px;
`;
export const ContactName = styled.span`
  margin-left: 15px;
`;

export const ContactButton = styled.button`
  padding: 5px 20px;

  background-color: teal;
  border: none;
  outline: none;
  color: aliceblue;
  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: #008080a8;
  }
`;

// .ContactList {
//   padding-left: 0px;
// }

// .item {
//   width: 400px;
//   padding: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 10px;
//   background-color: #fff;
// }

// .contactInfo {
//   display: flex;
//   font-size: 18px;
//   /* font-weight: bold; */
// }

// .name {
//   margin-left: 15px;
// }

// .button {
//   padding: 5px 20px;

//   background-color: teal;
//   border: none;
//   outline: none;
//   color: aliceblue;
//   border-radius: 5px;

//   &:hover,
//   &:focus {
//     background-color: #008080a8;
//   }
// }