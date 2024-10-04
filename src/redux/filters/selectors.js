import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = state =>
  state.filters.filter;

export const selectFilterContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
  return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
})