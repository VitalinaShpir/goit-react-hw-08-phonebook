import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Loader } from 'components/Loader/Loader';
import {
  Button,
  Input,
  Label,
  StyledForm,
  StyledError,
} from './RegisterForm.styled';

const defaultValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [determineRegisterBtn, setDetermineRegisterBtn] = useState(false);

  const handleRegisterSubmit = (values, action) => {
    setDetermineRegisterBtn(true);
    dispatch(register(values)).then(() => {
      setDetermineRegisterBtn(false);
    });
    action.resetForm();
  };

  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={handleRegisterSubmit}
    >
      <StyledForm>
        <Label>
          Username
          <Input type="text" name="name" />
          <StyledError name="name" component="div" />
        </Label>
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
        <Button type="submit" disabled={determineRegisterBtn}>
          {determineRegisterBtn && <Loader />}
          Register
        </Button>
      </StyledForm>
    </Formik>
  );
};