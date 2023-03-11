import { createSlice } from '@reduxjs/toolkit';

const validationsForm = (form) => {
  const errors = {};
  // const regexDni = /[0-9]{8}$/;
  const regexText = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  // if (!regexDni.test(form.dni.trim())) {
  //   errors.dni = "El campo 'DNI/Código' solo acepta números de 8 dígitos";
  // }

  // if (!form.name.trim()) {
  //   errors.name = "El campo 'Nombre' es requerido.";
  // } else if (!regexText.test(form.name.trim())) {
  //   errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco.";
  // }

  // if (!form.lastname.trim()) {
  //   errors.lastname = "El campo 'Apellidos' es requerido.";
  // } else if (!regexText.test(form.lastname.trim())) {
  //   errors.lastname = "El campo 'Apellidos' solo acepta letras y espacios en blanco";
  // }

  // if (!form.birthDate.trim()) {
  //   errors.birthDate = "El campo 'Fecha de nacimiento' es requerido.";
  // }

  // if (!form.gender.trim()) {
  //   errors.gender = "El campo 'Género' es requerido.";
  // }

  // if (!regexText.test(form.childBirth.trim())) {
  //   errors.childBirth = "El campo 'Nacimiento' solo acepta letras y espacios en blanco";
  // }

  // if (!regexText.test(form.apgar.trim())) {
  //   errors.apgar = "El campo 'Apgar' solo acepta letras y espacios en blanco";
  // }

  // if (!regexText.test(form.lactation.trim())) {
  //   errors.lactation = "El campo 'Lactancia' solo acepta letras y espacios en blanco";
  // }

  // if (!regexText.test(form.gestation.trim())) {
  //   errors.gestation = "El campo 'Gestación' solo acepta letras y espacios en blanco";
  // }

  if (!form.brainPerimeter.trim()) {
    errors.brainPerimeter = "El campo 'PC' es requerido.";
  } else if (!regexText.test(form.weight.trim())) {
    errors.brainPerimeter = "El campo 'PC' solo acepta letras y espacios en blanco";
  }

  return errors;
};

const initialFormState = {
  weight: '',
  percentileWeight: '',
  size: '',
  heightPercentile: '',
  brainPerimeter: '',
  bodyMassIndex: '',
  percentilMC: '',
  fRespiratory: '',
  fCardiac: '',
  saturacion: '',
  temperature: '',
  sickTime: '',
  story: '',
  reevaluation: '',
  diagnoses: [],
  longTreatments: [], // no va
  treatments: [],
  auxiliaryExams: [],
  symptoms: [],
  selectedTreatments: [],
  state: true,
};

const initialState = {
  form: initialFormState,
  errors: true,
  step: 0,
  showAppointmentForm: false,
};

const newAppointmentFormSlice = createSlice({
  name: 'newAppointmentForm',
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
    // form create appointment states
    openAppointnmentForm: (state) => {
      state.showAppointmentForm = true;
    },
    closeAppointmentForm: (state) => {
      state.showAppointmentForm = false;
      state.form = initialFormState;
      state.step = 0;
    },
  },
});

export const {
  handleChange, prevStep, nextStep, setStep, handleBlur, openAppointnmentForm, closeAppointmentForm,
} = newAppointmentFormSlice.actions;
export default newAppointmentFormSlice.reducer;
