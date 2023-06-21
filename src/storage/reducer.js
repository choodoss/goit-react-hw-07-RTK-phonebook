import { combineReducers } from "redux";
import { reducerFilter } from "./filterSlice";
import { contactsApi } from "./contactApi";

export const reducer = ({
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: reducerFilter,
})