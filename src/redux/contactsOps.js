import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://66f979cdafc569e13a98e4b9.mockapi.io'

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
})
export const addContact = createAsyncThunk('contact/addContact', async (contact, thunkAPI) => {
 try {
   const { data } = await axios.post('/contacts/', contact);
   return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
})

export const deleteContact = createAsyncThunk('contact/deleteContact', async (id, thunkAPI) => {

  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data.id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }

})

