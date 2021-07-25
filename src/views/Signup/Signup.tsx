import { Link, useHistory } from 'react-router-dom';

import EntryHelper from 'components/Entry/EntryHelper';
import EntryForm from 'components/Entry/EntryForm';
import Button from 'components/UI/Button';
import Form from 'components/UI/Form/Form';
import FormGroup from 'components/UI/Form/FormGroup';
import FormInput from 'components/UI/Form/FormInput';
import { Viewport } from 'components/Utilities/Utils';

import { Signup } from './Signup.element';

const SignupPage = () => {
  const history = useHistory();
  const entryText = 'Already have an account?';

  const handleSignup = () => {
    history.push('/home');
  };

  return (
    <Viewport>
      <Signup>
        <EntryForm>
          <Form title="Sign Up" onSubmit={handleSignup}>
            <FormGroup>
              <FormInput type="text" placeholder="Full name" label="Full name" required></FormInput>
            </FormGroup>
            <FormGroup>
              <FormInput type="text" placeholder="Username" label="Username" required></FormInput>
            </FormGroup>
            <FormGroup>
              <FormInput type="email" placeholder="Email address" label="Email address" required></FormInput>
            </FormGroup>
            <FormGroup>
              <FormInput type="password" placeholder="Password" label="Password" required></FormInput>
            </FormGroup>
            <span>
              <Button border="pilled" size="lg" variant="dense" color="primary">
                Sign Up
              </Button>
            </span>
          </Form>
        </EntryForm>
        <EntryHelper text={entryText}>
          <Link to="/login">
            <Button border="pilled" size="lg" variant="dense" color="light">
              Sign In
            </Button>
          </Link>
        </EntryHelper>
      </Signup>
    </Viewport>
  );
};

export default SignupPage;
