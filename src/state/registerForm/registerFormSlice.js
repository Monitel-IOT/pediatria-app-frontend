import { createSlice } from '@reduxjs/toolkit';

const validationsForm = (form) => {
  const errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexPassword = /^.{1,6}$/;
  // const regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombres' es requerido.";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombres' solo acepta letras y espacios en blanco.";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido.";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto.";
  }

  if (!form.password.trim()) {
    errors.password = "El campo 'Contraseña' es requerido.";
  } else if (regexPassword.test(form.password.trim())) {
    errors.password = "El campo 'Contraseña' requiere minimo 7 caracteres.";
  }

  return errors;
};

const hasErrors = (errors) => errors.name || errors.email || errors.password;

const initialFormState = {
  name: '',
  email: '',
  password: '',
};

const initialState = {
  form: initialFormState,
  errors: true,
  isDisabled: true,
};

const registerFormSlice = createSlice({
  name: 'registerForm',
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state.form = { ...state.form, [name]: value };
      state.errors = validationsForm(state.form);
      state.isDisabled = state.form.name.length === 0 || (hasErrors(state.errors));
    },
    handleBlur: (state, action) => {
      const { name, value } = action.payload;
      state.form = { ...state.form, [name]: value };
      state.errors = validationsForm(state.form);
    },
    initialStateForm: () => initialState,
  },
});

export const { handleChange, handleBlur, initialStateForm } = registerFormSlice.actions;
export default registerFormSlice.reducer;
