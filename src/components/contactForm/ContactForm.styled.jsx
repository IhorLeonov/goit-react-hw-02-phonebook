import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  margin-top: 15px;
  border-radius: 5px;
`;

export const FormLabel = styled.label`
  display: block;
  :nth-child(2) {
    margin-top: 10px;
  }
`;

export const Field = styled(FormikField)`
  display: block;
  margin-top: 10px;
  width: 100%;
`;

export const ErrorMessage = styled(FormikError)`
  margin-top: 10px;
  color: red;
`;

export const ButtonSubmit = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  display: inline-block;
  font-family: arial, sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: rgb(68, 68, 68);
  text-transform: capitalize;
  text-decoration: none;
  user-select: none;
  padding: 0.2em 1.2em;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  background: rgb(245, 245, 245) linear-gradient(#f4f4f4, #f1f1f1);
  transition: all 0.218s ease 0s;
  :hover,
  :focus {
    color: rgb(24, 24, 24);
    border: 1px solid rgb(198, 198, 198);
    background: #f7f7f7 linear-gradient(#f7f7f7, #f1f1f1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  :active {
    color: rgb(51, 51, 51);
    border: 1px solid rgb(204, 204, 204);
    background: rgb(238, 238, 238)
      linear-gradient(rgb(238, 238, 238), rgb(224, 224, 224));
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;
  }
`;
