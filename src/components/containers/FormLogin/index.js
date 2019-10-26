import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import { ThemeContext } from '../../../contexts';
import { styles, inputStyles } from './styles';
import useForm from '../../../hooks/useForm';
import { validateLogin } from '../../../utils/validations';

const INITIAL_STATE_FORM = {
  email: '',
  password: '',
};

const FormLogin = props => {
  const { currentTheme } = useContext(ThemeContext);
  const { colors } = currentTheme;
  // const [errors, setErrors] = useState({ message: '' });
  const errors = { message: '' };
  const { handleSubmit, handleChange, values } = useForm(
    INITIAL_STATE_FORM,
    validateLogin,
  );

  // if (window.localStorage.token) {
  //   props.history.push('/');
  // }

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
