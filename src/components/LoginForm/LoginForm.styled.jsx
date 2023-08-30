import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  padding: 20px;
  /* border: 2px black solid; */
  border-radius: 5px;
  min-width: 350px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  color: white;
  max-width: 300px;
`;

export const Input = styled(Field)`
  min-width: 300px;
  min-height: 26px;
  padding: 1px 5px;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  border-width: 0;
`;

export const Button = styled.button`
width: 150px;
height: 40px;
padding: 5px 20px;
align-items: center;
margin: 0 auto;
font-size: 18px;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
column-gap: 5px;
color: white;
background-color: transparent;
border: 1px solid transparent;
border-radius: 5px;
box-shadow: inset 0 5px 15px 4px rgba(0, 0, 0, 0.2);
transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
  border: 1px solid rgba(191, 0, 244, 0.2);
  box-shadow: inset 0 5px 10px 4px rgba(191, 0, 244, 0.2);
}
`;

export const StyledError = styled(ErrorMessage)`
  font-size: 14px;
  color: black;
  max-width: 300px;
`;