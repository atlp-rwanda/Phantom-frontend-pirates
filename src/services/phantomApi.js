import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const currentLang = localStorage.getItem('language')
const phantomApiHeaders = {
  'content-type': 'application/json',
  'Connection': 'keep-alive',
  'Accept-Language': currentLang
}

const baseUrl = 'https://phantom-api-pirates.herokuapp.com/' /* process.env.REACT_BACKEND_URL */;
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