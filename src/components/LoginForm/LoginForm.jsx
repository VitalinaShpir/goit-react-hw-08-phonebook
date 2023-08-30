import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Loader } from 'components/Loader/Loader';
import {
  Button,
  Input,
  Label,
  StyledForm,
  StyledError,
} from './LoginForm.styled';

const defaultValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [determineLogInBtn, setDetermineLogInBtn] = useState(false);

  const handleLoginSubmit = (values, action) => {
    setDetermineLogInBtn(true);
    dispatch(logIn(values)).then(() => {
      setDetermineLogInBtn(false);
    });
    action.resetForm();
  };

  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={handleLoginSubmit}
      //   validationSchema={schema}
    >
      <StyledForm>
        <Label>
          Email
          <Input type="email" name="email" />
          <StyledError name="email" component="div" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
          <StyledError name="password" component="div" />
        </Label>
        <Button type="submit" disabled={determineLogInBtn}>
          {determineLogInBtn && <Loader />}
          LogIn
        </Button>
      </StyledForm>
    </Formik>
  );
};