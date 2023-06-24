import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    GetUsers: builder.query({
      query: () => `posts`,
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
