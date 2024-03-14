import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  content: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, actions) => ({
      ...state,
      isModalOpen: true,
      content: actions.payload,
    }),
    closeModal: (state) => ({
      ...state,
      isModalOpen: false,
    }),
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
