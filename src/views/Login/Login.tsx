import EntryHelper from 'components/Entry/EntryHelper';
import EntryForm from 'components/Entry/EntryForm';
import Button from 'components/Button';
import { Viewport } from 'components/Utilities/Utils';

import { Login } from './Login.element';

const LoginPage = () => {
  const entryText: string = "Don't have an account?";

  return (
    <Viewport>
      <Login>
        <EntryHelper text={entryText}>
          <Button>asdf</Button>
        </EntryHelper>
        <EntryForm></EntryForm>
      </Login>
    </Viewport>
  );
};

export default LoginPage;
