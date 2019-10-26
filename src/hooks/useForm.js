import { useState } from 'react';

const useForm = initialState => {
  const [values, setValues] = useState(initialState);

  function handleChange({ target: { name, value } }) {
    setValues(oldValues => ({
      ...oldValues,
      [name]: value,
    }));
    console.log(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submit');
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return { handleSubmit, handleChange, values };
};

export default useForm;
