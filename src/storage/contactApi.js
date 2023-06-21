import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://648ae78d17f1536d65e9eeb8.mockapi.io/' }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        getAllContacts: builder.query({
            query: () => ({
                url: `contacts`
            }),
            transformResponse: (res) => res.toSorted((a, b) => a.name.localeCompare(b.name)),
            providesTags: ['Contacts'],
        }),

        addContact: builder.mutation({
            query: (contact) => ({
                url: `contacts`,
                method: 'POST',
                body: { name: contact.get('name'), phoneNumber: contact.get('phoneNumber') },
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
    }),
});

export const { useGetAllContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;


