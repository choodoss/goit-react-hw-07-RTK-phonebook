import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { contactsApi } from "./contactApi";

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware)
})