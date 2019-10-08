import React, { useContext, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ThemeContext from '../../contexts/ThemeContext';

const Login = props => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const { theme } = currentTheme;
  const { name, colors } = theme;
  debugger;
  useEffect(() => {}, [theme]);
  const useStyles = makeStyles({
    inputStyles: {
      borderWidth: 1,
      borderStyle: 'solid',
    },
  });
  const classes = useStyles();

  return (
    <FormControl>
      <h2 style={{ color: colors.color }}>{name}</h2>
      <Input
        style={{ backgroundColor: colors.backgroundColor }}
        onChange={toggleTheme}
      />
    </FormControl>
  );
};
export default Login;
