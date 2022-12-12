import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPatients, addNewPatient, fetchPatientsById, deletePatientsById,
} from '../../thunkAction/patients/patientsThunk';
import {
  sortLists, flatByPages, filterSearch, deleteFromArrayId, getDDMMAA,
} from '../../utils';

const initialState = {
  loading: false,
  patient: {},
  results: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  patients: [],
  resultsByPage: [],
  sortedResults: [],
  page: 0,
  toggleSort: true,
  filterPatients: [],
  // newPatient:{},
};

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    deletePatientStateBy: (state, action) => {
      const newPatients = deleteFromArrayId(state.patients, action.payload);
      state.patients = newPatients;
      const pages = flatByPages(newPatients, 10);
      state.resultsByPage = pages;
    },
    filterBy: (state, action) => {
      const filteredPatients = filterSearch(state.patients, action.payload[0], action.payload[1]);
      const pages = flatByPages(filteredPatients, 10);
      state.filterPatients = filteredPatients;
      state.resultsByPage = pages;
    },
    orderById: (state) => {
      const sortedResults = sortLists('nombre', state.patients, state.toggleSort);
      const pages = flatByPages(sortedResults, 10);
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
        state.loading = true;
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.results = action.payload.data;
        // const newArray = action.payload.data.map(({ DNI, Name, ...keepAttrs }) => keepAttrs);
        // console.log(newArray);
        const newArray = action.payload.data.filter((ob) => ob.state === true).map((patient) => ({
          // OJO: código temporal, cambiar por los atributos correctos del model,
          // este funciona temporalmente debido a que aun hay pacientes con los atributos con
          // la primera letra en mayusculas
          id: patient.id,
          nombre: patient.name,
          apellidos: patient.lastname,
          dni: patient.dni,
          fechaNacimiento: getDDMMAA(patient.birthDate),
          estado: patient.state, // solo se cambio state para que funcione el Delete
          fechaCreacion: getDDMMAA(patient.createdAt),
        }));
        state.patients = newArray;
        state.sortedResults = newArray;
        state.filterPatients = newArray;
        state.resultsByPage = flatByPages(newArray, 10);
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      })
      // GET PATIENT BY ID
      .addCase(fetchPatientsById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPatientsById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.patient = action.payload.data;
      })
      .addCase(fetchPatientsById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // DELETE PATIENT BY ID
      .addCase(deletePatientsById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deletePatientsById.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(deletePatientsById.rejected, (state, action) => {
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
  orderById, changePage, filterBy, deletePatientStateBy,
} = patientsSlice.actions;
export default patientsSlice.reducer;
