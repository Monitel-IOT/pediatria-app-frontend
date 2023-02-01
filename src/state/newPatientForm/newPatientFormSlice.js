import { createSlice } from '@reduxjs/toolkit';
import { fetchPatientsById } from '../../thunkAction/patients/patientsThunk';

const validationsForm = (form) => {
  const errors = {};
  const regexDni = /[0-9]{8}$/;
  const regexText = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  if (!regexDni.test(form.dni.trim())) {
    errors.dni = "El campo 'DNI/Código' solo acepta números de 8 dígitos";
  }

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido.";
  } else if (!regexText.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco.";
  }

  if (!form.lastname.trim()) {
    errors.lastname = "El campo 'Apellidos' es requerido.";
  } else if (!regexText.test(form.lastname.trim())) {
    errors.lastname = "El campo 'Apellidos' solo acepta letras y espacios en blanco";
  }

  if (!form.birthDate.trim()) {
    errors.birthDate = "El campo 'Fecha de nacimiento' es requerido.";
  }

  if (!form.gender.trim()) {
    errors.gender = "El campo 'Género' es requerido.";
  }

  if (!regexText.test(form.childBirth.trim())) {
    errors.childBirth = "El campo 'Nacimiento' solo acepta letras y espacios en blanco";
  }

  if (!regexText.test(form.apgar.trim())) {
    errors.apgar = "El campo 'Apgar' solo acepta letras y espacios en blanco";
  }

  if (!regexText.test(form.lactation.trim())) {
    errors.lactation = "El campo 'Lactancia' solo acepta letras y espacios en blanco";
  }

  if (!regexText.test(form.gestation.trim())) {
    errors.gestation = "El campo 'Gestación' solo acepta letras y espacios en blanco";
  }

  return errors;
};

const initialFormState = {
  dni: '',
  name: '',
  lastname: '',
  birthDate: '',
  gender: '',
  birthWeight: '',
  childBirth: '',
  apgar: '',
  supplementaryFeeding: false,
  lactation: '',
  gestation: '',
  vaccines: [],
  state: true,
};

const initialState = {
  form: initialFormState,
  isEdit: false,
  errors: true,
  step: 0,
  error: false,
  loading: false,
  showPatientForm: false,
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
    handleVaccines: (state, action) => {
      const { name, value } = action.payload;
      const obj = { name };
      if (value) {
        state.form.vaccines.push(obj);
      } else {
        const newVaccinesArray = state.form.vaccines.filter((item) => item.name !== name);
        state.form = { ...state.form, vaccines: newVaccinesArray };
      }
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
    openPatientForm: (state, action) => {
      if (action.payload) {
        // get the patient by id
        state.form = action.payload;
        state.isEdit = true;
      }
      state.showPatientForm = true;
    },
    closePatientForm: (state) => {
      state.showPatientForm = false;
      state.form = initialFormState;
      state.errors = true;
      state.step = 0;
      state.isEdit = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPatientsById.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchPatientsById.fulfilled, (state) => {
      // state.form = action.payload.data;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchPatientsById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const {
  handleChange,
  handleVaccines,
  prevStep,
  nextStep,
  setStep,
  handleBlur,
  openPatientForm,
  closePatientForm,
} = newPatientFormSlice.actions;
export default newPatientFormSlice.reducer;
