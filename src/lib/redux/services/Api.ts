// @ts-nocheck
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const Api = createApi({
  reducerPath: "Api",
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cms.erad-erp.com",
    
  prepareHeaders: (headers) => {
    headers.delete('Content-Type');
  },
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    Translations: builder.query({
      query: (lang) => `/translations?lang=${lang}&group=website`,
    }),
  }),
});

export const {
  useTranslationsQuery,
} = Api;
