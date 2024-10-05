import { createSlice } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "./operations"
import { logout } from "../auth/operations";

 const initialState = {
    items: [],
    isLoading: false,
    error: null,
  }

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => 
    builder
      .addCase(fetchContacts.pending, state => {
    
        state.isLoading = true;
        state.error = null;

      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
    
        state.isLoading = false;
        state.items = payload;

      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.items = [];

      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.error = null;

      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
    
        state.isLoading = false;
        state.items.push(payload);
      })
   .addCase(addContact.rejected, (state, { payload }) => {
    
        state.isLoading = false;
     state.error = payload;
     state.items = [];
   })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;

      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);

      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.items = [];

      })
  .addCase(logout.fulfilled, (state) => {
    state.items = [];
        state.error = null;
        state.isLoading = false;
      })
})


export const contactsReducer = contactsSlice.reducer;


