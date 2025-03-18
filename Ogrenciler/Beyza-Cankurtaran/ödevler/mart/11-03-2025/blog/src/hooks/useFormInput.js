import { useState } from "react";

export function useFormInput(initialState = { email: "", password: "" }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, handleChange, setFormData };
}
