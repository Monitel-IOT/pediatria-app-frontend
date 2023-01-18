import { createSlice } from '@reduxjs/toolkit';
import { handleLoginMessages } from '../../utils/authMessages/authMessages';

const validationsForm = (form) => {
  const errors = {};
  // const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexPassword = /^.{1,6}$/;
  // const regexComments = /^.{1,255}$/;

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

const hasErrors = (errors) => errors.email || errors.password;

const initialFormState = {
  email: '',
  password: '',
};

const initialState = {
  form: initialFormState,
  errors: true,
  isDisabled: true,
  // alerts ui
  showLoginAlert: false,
  typeLoginAlert: '',
  loginAlertMessage: '',
  loginAlertAnimation: 'hidden',
};

const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state.form = { ...state.form, [name]: value };
      state.errors = validationsForm(state.form);
      state.isDisabled = state.form.email.length === 0 || (hasErrors(state.errors));
    },
    handleBlur: (state, action) => {
      const { name, value } = action.payload;
      state.form = { ...state.form, [name]: value };
      state.errors = validationsForm(state.form);
    },
    openLoginAlert: (state, action) => {
      state.loginAlertMessage = handleLoginMessages(action.payload.message);
      state.typeLoginAlert = action.payload.type;
      state.showLoginAlert = true;
      state.loginAlertAnimation = 'animate__fadeInDown';
    },
    closeLoginAlert: (state) => {
      state.showLoginAlert = false;
      state.loginAlertAnimation = 'animate__fadeOutUp';
    },
    initialStateForm: () => initialState,
  },
});

export const {
  handleChange, handleBlur, initialStateForm, openLoginAlert, closeLoginAlert,
} = loginFormSlice.actions;
export default loginFormSlice.reducer;
