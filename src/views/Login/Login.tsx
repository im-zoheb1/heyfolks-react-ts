import { Link, useHistory } from 'react-router-dom';

import EntryHelper from 'components/Entry/EntryHelper';
import EntryForm from 'components/Entry/EntryForm';
import Button from 'components/UI/Button';
import Form from 'components/UI/Form/Form';
import FormGroup from 'components/UI/Form/FormGroup';
import FormInput from 'components/UI/Form/FormInput';
import { ForgotPassword } from './Login.element';
import { Viewport } from 'components/Utilities/Utils';

import { Login } from './Login.element';

const LoginPage = () => {
  const history = useHistory();
  const entryText = "Don't have an account?";

  function handleLogin() {
    history.push('/home');
  }

  return (
    <Viewport>
      <Login>
        <EntryHelper text={entryText}>
          <Link to="/signup">
            <Button border="pilled" size="lg" variant="dense" color="light">
              Sign Up
            </Button>
          </Link>
        </EntryHelper>
        <EntryForm>
          <Form title="Sign In" onSubmit={handleLogin}>
            <FormGroup>
              <FormInput type="email" placeholder="Email address" label="Email address" required></FormInput>
            </FormGroup>
            <FormGroup>
              <FormInput type="password" placeholder="Password" label="Password" required></FormInput>
            </FormGroup>
            <FormGroup>
              <ForgotPassword>forgot password?</ForgotPassword>
            </FormGroup>
            <span>
              <Button border="pilled" size="lg" variant="dense" color="primary">
                Log In
              </Button>
            </span>
          </Form>
        </EntryForm>
      </Login>
    </Viewport>
  );
};

export default LoginPage;
