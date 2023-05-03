import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'Redux/contactsSlice';
import { authReducer } from "../Redux/Auth/authSlice"

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,} },
);
