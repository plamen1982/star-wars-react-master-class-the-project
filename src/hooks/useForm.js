import { useState } from 'react';

const useForm = (initialState, validateLogin, login) => {
  const [values, setValues] = useState(initialState);

  function handleChange({ target: { name, value } }) {
    setValues(oldValues => ({
      ...oldValues,
      [name]: value,
    }));
    console.log(value);
  }

  function handleSubmit(e) {
    const { email, password } = values;
    login({ variables: { email, password } });

    e.preventDefault();
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return { handleSubmit, handleChange, values };
};

export default useForm;
