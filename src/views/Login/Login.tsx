import EntryHelper from 'components/Entry/EntryHelper';
import EntryForm from 'components/Entry/EntryForm';
import { Viewport } from 'components/Utilities/Utils';

import styled from 'styled-components';

const Login = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const LoginPage = () => {
  const entryText: string = "Don't have an account?";

  return (
    <Viewport>
      <Login>
        <EntryHelper text={entryText}>adf</EntryHelper>
        <EntryForm></EntryForm>
      </Login>
    </Viewport>
  );
};

export default LoginPage;
