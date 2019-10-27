import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { ThemeContext } from '../../../contexts';
import { styles, inputStyles } from './styles';
import useForm from '../../../hooks/useForm';
import { validateLogin } from '../../../utils/validations';
import { SIGN_IN } from '../../../queries';

const INITIAL_STATE_FORM = {
  email: '',
  password: '',
};

const FormLogin = props => {
  const { currentTheme } = useContext(ThemeContext);
  const { colors } = currentTheme;
  const errors = { message: '' };

  const client = useApolloClient();
  const history = useHistory();
  const token = window.localStorage.token;
  if (token) {
    history.push('/episodes');
  }
  const [login, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: props => {
      localStorage.setItem('token', `Bearer ${props.signIn.token}`);
      client.writeData({ data: { authenticated: true } });
      const token = window.localStorage.token;

      if (token) {
        history.push('/episodes');
      }
    },
    onError: () => {
      localStorage.setItem('token', '');
      client.writeData({ data: { authenticated: false } });
    },
  });

  const { handleSubmit, handleChange, values } = useForm(
    INITIAL_STATE_FORM,
    validateLogin,
    login,
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <p>An error occurred</p>;
  const { borderStyle, borderWidth, borderRadius, marginBottom } = inputStyles;
  return (
    <>
      <form style={styles} onSubmit={handleSubmit}>
        <div style={{ color: colors.color }}>Login Form</div>
        {errors.message && <div> {errors.message} </div>}
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
      }
    </>
  );
};

export default FormLogin;
