import {useState} from 'react';

const useForm = <T extends Object>(initialState: T) => {
  const [form, setForm] = useState(initialState);

  // se tipa como generico
  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  return {
    ...form,
    form,
    onChange,
  };
};

export default useForm;
