import { createSlice } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "./contactsOps"

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
        state.eror = null;

      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);

      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.eror = payload;
        state.items = [];

  })
})


export const contactsReducer = contactsSlice.reducer;


