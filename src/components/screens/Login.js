import React, { useContext, useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import ThemeContext from '../../contexts/ThemeContext';

const Login = props => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const { currentTheme } = useContext(ThemeContext);
  const { theme } = currentTheme;
  const { name, colors } = theme;
  const [values, setValues] = useState({ email: 'e', password: 'p' });

  useEffect(() => {}, [theme]);

  const inputStyles = {
    borderWidth: 1,
    borderStyle: 'solid',
  };
  const { borderStyle, borderWidth } = inputStyles;

  const handleChange = ({ target: { name, value } }) => {
    setValues(oldValues => ({
      ...oldValues,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    //TODO make a validation
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ color: colors.color }}>{name}</h2>
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
        }}
      />
      <button>Submit</button>
    </form>
  );
};
export default Login;
