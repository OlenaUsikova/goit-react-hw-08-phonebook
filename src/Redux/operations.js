import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, { rejectWithValue }) => {
      try {
        const response = await axios.post('contacts', { name, phone: number });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
      console.log(id);
      try {
      await axios.delete(`/contacts/${id}`);

        return id;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    },
    )