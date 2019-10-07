import React, { useContext } from 'react';
import { FormControl, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ThemeContext from '../../context';

const Login = props => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const { theme, changeTheme } = useContext(ThemeContext);
  debugger;
  const useStyles = makeStyles({
    inputStyles: {
      borderWidth: 1,
      borderStyle: 'solid',
    },
  });
  const classes = useStyles();
  const handleSubmit = e => {
    debugger;
    e.preventDefault();
    changeTheme(theme);
  };
  return (
    <FormControl>
      <h2>{theme}</h2>
      <Input className={classes.inputStyles} onChange={handleSubmit} />
    </FormControl>
  );
};
export default Login;
