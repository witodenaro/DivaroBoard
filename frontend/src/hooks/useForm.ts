import { useState } from 'react';

export const useForm = <T>(initialValues: T) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return { values, handleChange };
};
