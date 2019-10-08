import React, { useContext, useEffect, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import ThemeContext from '../../contexts/ThemeContext';

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const { currentTheme } = useContext(ThemeContext);
  const { theme } = currentTheme;
  const { colors } = theme;
  const [values, setValues] = useState({ email: 'e', password: 'p' });

  useEffect(() => {}, [theme]);

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

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: colors.backgroundColor,
    padding: 30,
    margin: 30,
  };

  const inputStyles = {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 1,
    marginBottom: 10,
  };
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
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
export default Login;
