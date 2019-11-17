import { useState, useEffect } from 'react';

const useForm = (initialState, validateLogin, login) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  function handleChange({ target: { name, value } }) {
    setValues(oldValues => ({
      ...oldValues,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    const errorsFromValidation = validateLogin(values);
    if (!errorsFromValidation.message) {
      login({ variables: { email, password } });
    } else {
      setErrors({ ...errors, ...errorsFromValidation });
    }
  }
  useEffect(() => {
    // login({ variables: values });
  }, [errors]);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return { handleSubmit, handleChange, values, errors };
};

export default useForm;
