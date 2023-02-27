import styled from 'styled-components';

export const Phonebook = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  width: 400px;

  border-radius: 5px;
  border: ${props => `1px solid ${props.theme.colors.bd}`};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  background-color: ${props => `${props.theme.colors.bg}`};
`;

export const MainTitle = styled.h1`
  text-align: center;
`;

export const SecondTitle = styled.h2`
  margin-top: 15px;
  text-align: center;
`;
