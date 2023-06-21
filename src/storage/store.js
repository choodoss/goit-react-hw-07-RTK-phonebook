import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
    reducer: reducer,
    middleware: (defaultMiddleware => defaultMiddleware().concat(contactsApi.middleware))
})