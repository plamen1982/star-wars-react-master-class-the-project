import React, { useContext, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ThemeContext from '../../contexts/ThemeContext';

const Login = props => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const { theme } = currentTheme;
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
      <h2>{theme}</h2>
      <Input className={classes.inputStyles} onChange={toggleTheme} />
    </FormControl>
  );
};
export default Login;
