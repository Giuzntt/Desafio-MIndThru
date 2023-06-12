import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import client from "../../services/client";

export interface CharactersState {
  loading: boolean;
  results: any[];
}

const initialState: CharactersState = {
  loading: false,
  results: [],
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    const response = await client.get("/characters");
    return response.data;
  }
);

export const fetchCharacterId = createAsyncThunk(
  "characters/fetchCharacterId",
  async (id: string) => {
    const response = await client.get(`/characters/${id}`);
    return response.data;
  }
);

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = false;
      state.results = action.payload.data.results;
    });

    builder.addCase(fetchCharacters.pending, (state) => {
      // Add user to the state array
      state.loading = true;
    });
  },
});

// Action creators are generated for each case reducer function

export default characterSlice.reducer;
