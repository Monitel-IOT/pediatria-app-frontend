import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPatients, fetchPatientsById,
} from '../../thunkAction/patients/patientsThunk';
import {
  sortLists, flatByPages, filterSearch, deleteFromArrayId,
} from '../../utils';

const initialState = {
  loading: false,
  patient: {},
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  patients: [],
  resultsByPage: [],
  sortedResults: [],
  page: 0,
  toggleSort: true,
  filterPatients: [],
  showDeleteModal: false,
  patientIdToDelete: '',
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
      if (filteredPatients.length >= 1) {
        const pages = flatByPages(filteredPatients, 10);
        state.filterPatients = filteredPatients;
        state.resultsByPage = pages;
      } else {
        state.resultsByPage = flatByPages(state.patients, 10);
      }
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
    addNewPatientState: (state, action) => {
      const newArray = [...state.patients, action.payload];
      state.patients = newArray;
      state.resultsByPage = flatByPages(newArray, 10);
    },
    updatePatientState: (state, action) => {
      const newUpdated = state.patients.map(
        (patient) => (patient.id === action.payload.id ? action.payload : patient),
      );
      state.patients = newUpdated;
      state.resultsByPage = flatByPages(newUpdated, 10);
    },
    openDeleteModal: (state, action) => {
      state.showDeleteModal = true;
      state.patientIdToDelete = action.payload;
    },
    closeDeleteModal: (state) => {
      state.showDeleteModal = false;
      state.patientIdToDelete = '';
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
        // const newArray = action.payload.data.map(({ DNI, Name, ...keepAttrs }) => keepAttrs);
        // console.log(newArray);
        state.patients = action.payload.data;
        state.sortedResults = action.payload.data;
        state.filterPatients = action.payload.data;
        state.resultsByPage = flatByPages(action.payload.data, 10);
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
  orderById,
  changePage,
  filterBy,
  deletePatientStateBy,
  addNewPatientState,
  updatePatientState,
  closeDeleteModal,
  openDeleteModal,
} = patientsSlice.actions;
export default patientsSlice.reducer;
