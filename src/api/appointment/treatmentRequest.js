// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getRootPath } from '../services';

// Define a service using a base URL and expected endpoints
export const treatmentApi = createApi({
  reducerPath: 'treatment',
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
  tagTypes: ['Treatment'],
  endpoints: (builder) => ({
    getAllTreatments: builder.query({
      query: () => 'treatment',
      providesTags: ['Treatment'],
    }),
    addTreatment: builder.mutation({
      query: (body) => ({
        url: 'treatment/63a08dd7b13288b9220a1f3d',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Treatment'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTreatmentsQuery, useAddTreatmentMutation } = treatmentApi;
