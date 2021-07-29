import styled from 'styled-components/macro';

export const Dashboard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.dashboardBgColor};
  width: 100%;
  height: 100%;
`;

export const DashboardView = styled.div`
  flex: 1;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
