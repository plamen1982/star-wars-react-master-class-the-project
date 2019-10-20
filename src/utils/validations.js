const validateLogin = values => {
  let errors = {};

  if (values.email.length < 1) {
    errors.credentials = 'Invalid credentials!';
  } else if (values.password.length < 1) {
    errors.password = 'Invalid credentials!';
  }

  return errors;
};

export { validateLogin };
