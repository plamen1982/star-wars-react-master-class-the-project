import { useEffect, useState } from 'react';

const useForm = (initialState, validate, authenticate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        authenticate(values)
          .then(isLogged => {
            setIsAuthenticated({ isLogged });
            setSubmitting(false);
          })
          .catch(errors => {
            setErrors(errors);p
          });
      } else {
        setSubmitting(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors, isAuthenticated]);
  function handleChange({ target: { name, value } }) {
    setValues(oldValues => ({
      ...oldValues,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return { handleSubmit, handleChange, values, errors, isAuthenticated };
};

export default useForm;
