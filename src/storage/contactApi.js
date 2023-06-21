import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://648ae78d17f1536d65e9eeb8.mockapi.io/' }),
    endpoints: (builder) => ({
        getAllContacts: builder.query({
            query: () => `contacts`,
        }),
        addContact: builder.mutation({
            query: (contact) => `contacts`,
            method: 'POST',
            body: contact,
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
})

export const { getAllContacts, addContact, deleteContact } = contactsApi;