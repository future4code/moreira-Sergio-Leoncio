import { useState } from "react";

const useForm = (inicialState) => {
  const [form, setForm] = useState(inicialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const cleanFields = () => {
    setForm(inicialState);
  };
  return { form, onChange, cleanFields };
};
export default useForm;
