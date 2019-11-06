import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  TextField,
  Container,
  Typography,
  Box,
  Button,
  makeStyles,
} from '@material-ui/core';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { ThemeContext } from '../../../../contexts';
import { validateLogin } from '../../../../utils/validations';
import { SIGN_IN } from '../../../../queries';
import useForm from '../../../../hooks/useForm/useForm';

const INITIAL_STATE_FORM = {
  email: '',
  password: '',
};
const FormLogin = props => {
  const { currentTheme } = useContext(ThemeContext);
  const { colors } = currentTheme;
  const useStyles = makeStyles(colors);
  const classes = useStyles();

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
      history.push('/login');
    },
  });

  const { handleSubmit, handleChange, values, errors } = useForm(
    INITIAL_STATE_FORM,
    validateLogin,
    login,
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <p>An error occurred</p>;
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingBottom: '40vh',
      }}
    >
      <Typography
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
        className={classes.primaryHeading}
      >
        <Box
          fontSize={100}
          fontStyle="italic"
          fontFamily="Roboto"
          fontWeight="bold"
        >
          SWAPP
        </Box>
      </Typography>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 500,
          backgroundColor: 'lightgrey',
          padding: 40,
          borderRadius: 5,
        }}
      >
        {errors.message && <div> {errors.message} </div>}
        <TextField
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
          style={{
            borderWidth: 1,
            borderStyle: 'none',
            borderRadius: 5,
            marginBottom: 15,
            paddingLeft: 5,
          }}
          className={classes.inputs}
        />
        <TextField
          name="password"
          onChange={handleChange}
          value={values.password}
          type="password"
          style={{
            borderWidth: 1,
            borderStyle: 'none',
            borderRadius: 5,
            marginBottom: 15,
            paddingLeft: 5,
          }}
          className={classes.inputs}
        />
        <Typography
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            variant="contained"
            className={classes.solidButtons}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Typography>
      </Container>
    </form>
  );
};

export default FormLogin;
