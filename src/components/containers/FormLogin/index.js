import React, { useContext, useEffect, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import { ThemeContext } from '../../../contexts';
import { styles, inputStyles } from './styles';
import useForm from '../../../hooks/useForm';
import { validateLogin } from '../../../utils/validations';
import { baseUrl } from '../../../constants/url-releted';
const INITIAL_STATE_FORM = {
  email: '',
  password: '',
};

const FormLogin = props => {
  const { currentTheme } = useContext(ThemeContext);
  const { colors } = currentTheme;

  const authenticateUser = async () => {
    const { email, password } = values;
    try {
      const {
        data: {
          data: {
            signIn: { token },
          },
        },
      } = await axios.post(baseUrl, {
        query: `mutation { signIn(email: "${email}" password: "${password}") {token} }`,
      });
      if (token.length > 0) {
        window.localStorage.setItem('token', token);
        props.history.push('/');
      } else {
        console.log('Invalid credential!');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { handleSubmit, handleChange, values, errors, isSubmitting } = useForm(
    INITIAL_STATE_FORM,
    validateLogin,
    authenticateUser,
  );
  const { borderStyle, borderWidth, borderRadius, marginBottom } = inputStyles;
  return (
    <form style={styles} onSubmit={handleSubmit}>
      <div style={{ color: colors.color }}>Login Form</div>
      <TextField
        name="email"
        onChange={handleChange}
        value={values.email}
        style={{
          backgroundColor: colors.backgroundColor,
          borderWidth,
          borderStyle,
        }}
      />
      <TextField
        name="password"
        onChange={handleChange}
        value={values.password}
        type="password"
        style={{
          backgroundColor: colors.backgroundColor,
          borderWidth,
          borderStyle,
          borderRadius,
          marginBottom,
        }}
      />
      <button variant="contained" color="primary">
        Submit
      </button>
    </form>
  );
};

export default FormLogin;
