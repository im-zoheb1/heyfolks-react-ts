import styled from 'styled-components/macro';

export const Dashboard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.dashboardBgColor};
  width: 100%;
  height: 100%;
`;
