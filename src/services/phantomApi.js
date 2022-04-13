import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const phantomApiHeaders = {
  'content-type': 'application/json',
  'Connection': 'keep-alive',
}

const baseUrl = 'https://phantom-api-pirates.herokuapp.com/';
const createRequest = (url) => ({ url, headers: phantomApiHeaders});

export const phantomApi = createApi({
  reducerPath: 'phantomApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPhantom: builder.query({
      query: () => createRequest()
    }),

  })
});

export const { useGetPhantomQuery
} = phantomApi;