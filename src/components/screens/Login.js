import React from 'react';
import { FormControl, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Login = props => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const useStyles = makeStyles({
    inputStyles: {
      borderWidth: 1,
      borderStyle: 'solid',
    },
  });
  const classes = useStyles();
  return (
    <FormControl>
      <h2>SWAPP</h2>
      <Input className={classes.inputStyles} />
    </FormControl>
  );
};
export default Login;
