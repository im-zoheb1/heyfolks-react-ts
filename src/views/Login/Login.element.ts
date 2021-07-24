import styled from 'styled-components';

export const Login = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const ForgotPassword = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.md};
  transition: color 0.3s ease-in-out;
  text-align: right;
  width: 100%;
  &:hover {
    color: #777;
  }
`;
