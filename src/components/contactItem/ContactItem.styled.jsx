import styled from 'styled-components';
import { ButtonSubmit } from 'components/contactForm/ContactForm.styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  :first-child {
    margin-top: 0;
  }
`;

export const ButtonDelete = styled(ButtonSubmit)`
  margin: 0;
  font-size: 11px;
`;
