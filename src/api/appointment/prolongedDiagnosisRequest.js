import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSelector } from '@reduxjs/toolkit';
import { getRootPath } from '../services';

export const prolongedDiagnosisRequestApi = createApi({
  reducerPath: 'selectOptionsAppointment',
  baseQuery: fetchBaseQuery({
    baseUrl: getRootPath(),
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().authReducer.user;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['selectOptionsAppointment'],
  endpoints: (builder) => ({
    getAllDiagnosis: builder.query({
      query: () => 'diagnosis',
      providesTags: ['selectOptionsAppointment'],
    }),
    getAllTreatmentSelect: builder.query({
      query: () => 'treatment',
      providesTags: ['selectOptionsAppointment'],
    }),
    getAllAuxiliaryExam: builder.query({
      query: () => 'auxiliary-exam',
      providesTags: ['selectOptionsAppointment'],
    }),
    getAllSymptoms: builder.query({
      query: () => 'symptom',
      providesTags: ['selectOptionsAppointment'],
    }),
  }),
});

export const {
  useGetAllDiagnosisQuery,
  useGetAllTreatmentSelectQuery,
  useGetAllAuxiliaryExamQuery,
  useGetAllSymptomsQuery,
} = prolongedDiagnosisRequestApi;

/* const mapOptions = (options) => {
  if (!options) {
    return [];
  }
  return options.map(({ name }) => ({ value: name, label: name }));
}; */

const mapOptionsDiagnosis = (options) => {
  if (!options) {
    return [];
  }
  return options.map(({ diagnosisName }) => ({
    value: diagnosisName,
    label: diagnosisName,
  }));
};

const mapOptionsTreatments = (options) => {
  if (!options) {
    return [];
  }
  return options.map(({ nameTreatment }) => ({
    value: nameTreatment,
    label: nameTreatment,
  }));
};

const mapOptionsAuxiliaryExam = (options) => {
  if (!options) {
    return [];
  }
  return options.map(({ nameAuxiliaryExam }) => ({
    value: nameAuxiliaryExam,
    label: nameAuxiliaryExam,
  }));
};

const mapOptionsSymptoms = (options) => {
  if (!options) {
    return [];
  }
  return options.map(({ symptomName }) => ({
    value: symptomName,
    label: symptomName,
  }));
};

export const selectOptionsDiagnosis = createSelector(
  prolongedDiagnosisRequestApi?.endpoints?.getAllDiagnosis.select(),
  (diagnoses) => mapOptionsDiagnosis(diagnoses?.data?.data),
);

export const selectTreatments = createSelector(
  prolongedDiagnosisRequestApi?.endpoints?.getAllTreatmentSelect.select(),
  (treatments) => mapOptionsTreatments(treatments?.data?.data),
);

export const selectAuxiliaryExam = createSelector(
  prolongedDiagnosisRequestApi?.endpoints?.getAllAuxiliaryExam.select(),
  (auxiliaryExams) => mapOptionsAuxiliaryExam(auxiliaryExams?.data?.data),
);

export const selectSymptoms = createSelector(
  prolongedDiagnosisRequestApi?.endpoints?.getAllSymptoms.select(),
  (symptoms) => mapOptionsSymptoms(symptoms?.data?.data),
);
