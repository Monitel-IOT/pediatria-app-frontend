import { createSlice } from '@reduxjs/toolkit';
import { fetchPatients, addNewPatient } from '../../thunkAction/patients/patientsThunk';
import { sortLists, flatByPages, filterSearch } from '../../utils';

const initialState = {
  results: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  patients: [],
  resultsByPage: [],
  sortedResults: [],
  page: 0,
  toggleSort: true,
  filterResults: [],
  // newPatient:{},
};

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    filterBy: (state, action) => {
      const filteredPatients = filterSearch(state.patients, action.payload[0], action.payload[1]);
      const pages = flatByPages(filteredPatients, 4);
      state.filterResults = filteredPatients;
      state.resultsByPage = pages;
    },
    orderById: (state) => {
      const sortedResults = sortLists('nombre', state.patients, state.toggleSort);
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
        state.results = action.payload.data;
        // const newArray = action.payload.data.map(({ DNI, Name, ...keepAttrs }) => keepAttrs);
        // console.log(newArray);
        const newArray = action.payload.data.map((patient) => ({
          nombre: patient.Name,
          apellidos: patient.LastName,
          dni: patient.DNI,
          fechaNacimiento: patient.DateBirth,
        }));

        state.patients = newArray;
        state.sortedResults = newArray;
        state.filterResults = newArray;
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
        state.results.push(action.payload);
      })
      .addCase(addNewPatient.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getAllPatientsOfADoctor = (state) => state.results.patients;
export const getPatientsStatus = (state) => state.results.status;
export const getPatientsError = (state) => state.results.error;

export const getPatientByDni = (state, dni) => {
  state.results.patients.find((patient) => patient.DNI === dni);
};

export const {
  orderById, changePage, filterBy,
} = patientsSlice.actions;
export default patientsSlice.reducer;
