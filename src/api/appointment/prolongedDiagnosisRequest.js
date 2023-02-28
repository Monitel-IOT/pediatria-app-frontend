// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getRootPath } from '../services';

// Define a service using a base URL and expected endpoints
export const prolongedDiagnosisRequestApi = createApi({
  reducerPath: 'prolongedDiagnosis',
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
  tagTypes: ['prolongedDiagnosis'],
  endpoints: (builder) => ({
    getAllProlongedDiagnosis: builder.query({
      query: () => 'prolonged-diagnosis',
      providesTags: ['Treatment'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProlongedDiagnosisQuery } = prolongedDiagnosisRequestApi;
