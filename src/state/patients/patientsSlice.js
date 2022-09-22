import { createSlice } from '@reduxjs/toolkit';
import { fetchPatients, addNewPatient } from '../../thunkAction/patients/patientsThunk';
import { sortLists, flatByPages } from '../../utils';

const initialState = {
  patients: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  patientsFiltered: [],
  resultsByPage: [],
  sortedResults: [],
  page: 0,
  toggleSort: true,
  // newPatient:{},
};

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    orderById: (state) => {
      const sortedResults = sortLists('nombre', state.patientsFiltered, state.toggleSort);
      const pages = flatByPages(sortedResults, 4);
      state.toggleSort = !state.toggleSort;
      state.sortedResults = sortedResults;
      state.resultsByPage = pages;
    },
    changePage: (state, action) => {
      state.page = action.payload - 1;
    },
    initialState: () => initialState,

  },
  extraReducers(builder) {
    builder
      // GET ALL PATIENTS OF A DOCTOR
      .addCase(fetchPatients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.patients = action.payload.data;
        // const newArray = action.payload.data.map(({ DNI, Name, ...keepAttrs }) => keepAttrs);
        // console.log(newArray);
        const newArray = action.payload.data.map((patient) => ({
          nombre: patient.Name,
          apellidos: patient.LastName,
          dni: patient.DNI,
          fechaNacimiento: patient.DateBirth,
        }));

        state.patientsFiltered = newArray;
        state.sortedResults = newArray;
        state.resultsByPage = flatByPages(newArray, 4);
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // POST PATIENT
      .addCase(addNewPatient.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addNewPatient.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.patients.push(action.payload);
      })
      .addCase(addNewPatient.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getAllPatientsOfADoctor = (state) => state.patients.patients;
export const getPatientsStatus = (state) => state.patients.status;
export const getPatientsError = (state) => state.patients.error;

export const getPatientByDni = (state, dni) => {
  state.patients.patients.find((patient) => patient.DNI === dni);
};

export const {
  orderById, changePage,
} = patientsSlice.actions;
export default patientsSlice.reducer;
