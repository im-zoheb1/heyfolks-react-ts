import styled from 'styled-components/macro';

export const Mansory = styled.div`
  columns: 400px;
  column-gap: ${(props) => props.theme.margin.gutter};
`;
export const MansoryItem = styled.div`
  break-inside: avoid-column;
  margin-bottom: ${(props) => props.theme.margin.gutter};
`;
