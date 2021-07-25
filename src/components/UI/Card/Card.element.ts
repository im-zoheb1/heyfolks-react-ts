import styled from 'styled-components/macro';

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.boxShadow.default};
  border-radius: ${(props) => props.theme.borderRadius.rounded};
  width: 100%;
  height: auto;
`;

export const CardBody = styled.div`
  padding: ${(props) => props.theme.padding.card};
`;

export const CardFooter = styled.div`
  padding: ${(props) => props.theme.padding.card};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
