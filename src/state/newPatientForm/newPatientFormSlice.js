import { createSlice } from '@reduxjs/toolkit';

const validationsForm = (form) => {
  const errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  // const regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido.";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco.";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido.";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto.";
  }

  if (!form.password.trim()) {
    errors.password = "El campo 'Password' es requerido.";
  }

  if (!form.age.trim()) {
    errors.age = "El campo 'Edad' es requerido.";
  }

  if (!form.dni.trim()) {
    errors.dni = "El campo 'DNI' es requerido.";
  }

  if (!form.surname.trim()) {
    errors.surname = "El campo 'Apellidos' es requerido.";
  }

  if (!form.birthWeight.trim()) {
    errors.birthWeight = "El campo 'Peso de Nacimiento' es requerido.";
  }

  return errors;
};

const initialFormState = {
  name: '',
  email: '',
  password: '',
  age: '',
  dni: '',
  surname: '',
  birthWeight: '',
};

const initialState = {
  form: initialFormState,
  errors: true,
  step: 0,
};

const newPatientFormSlice = createSlice({
  name: 'newPatientForm',
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state.form = { ...state.form, [name]: value };
      state.errors = validationsForm(state.form);
    },
    handleBlur: (state, action) => {
      const { name, value } = action.payload;
      state.form = { ...state.form, [name]: value };
      state.errors = validationsForm(state.form);
    },
    prevStep: (state) => {
      if (state.step > 0) {
        state.step -= 1;
      }
    },
    nextStep: (state, action) => {
      if (state.step < action.payload - 1) {
        state.step += 1;
      }
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const {
  handleChange, prevStep, nextStep, setStep, handleBlur,
} = newPatientFormSlice.actions;
export default newPatientFormSlice.reducer;
