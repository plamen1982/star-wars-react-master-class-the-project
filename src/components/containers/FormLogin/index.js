import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import { ThemeContext } from '../../../contexts';
import { styles, inputStyles } from './styles';
import useForm from '../../../hooks/useForm';
import { validateLogin, authenticateUser } from '../../../utils/validations';
import { useHistory } from 'react-router-dom';

const INITIAL_STATE_FORM = {
  email: '',
  password: '',
};

const FormLogin = props => {

  const { currentTheme } = useContext(ThemeContext);
  const { colors } = currentTheme;
  const history = useHistory();

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    isAuthenticated,
  } = useForm(INITIAL_STATE_FORM, validateLogin, authenticateUser);

  if (isAuthenticated) {
    history.push('/');
  }

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
