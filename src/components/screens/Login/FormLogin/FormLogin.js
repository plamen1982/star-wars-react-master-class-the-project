import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  TextField,
  Container,
  Typography,
  Box,
  Button,
  makeStyles,
  Grid,
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
    <Container>
      <Grid container>
        <Grid item md={12}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              paddingBottom: '40vh',
              marginTop: 100,
            }}
          >
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
              <Typography
                className={classes.primaryHeading}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#FFE300',
                }}
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
              {errors.message && (
                <Typography
                  style={{
                    color: 'red',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    fontSize={15}
                    fontStyle="italic"
                    fontFamily="Roboto"
                    fontWeight="bold"
                  >
                    {errors.message}
                  </Box>{' '}
                </Typography>
              )}
              <TextField
                name="email"
                type="email"
                placeholder="email"
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
                placeholder="password"
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default FormLogin;
