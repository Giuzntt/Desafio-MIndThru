import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import client from "../../services/client";

export interface CharactersState {
  loading: boolean;
  results: [];
  resultsHQ: [];
  resultsCharacterId: [];

  offset?: number;
  limit?: number;
  total?: number;
  count?: number;
}

const initialState: CharactersState = {
  loading: false,
  results: [],
  resultsCharacterId: [],
  resultsHQ: [],
  offset: 0,
  limit: 20,
  total: 0,
  count: 0,
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async ({ offset = 0, limit = 20 }: { offset?: number; limit?: number }) => {
    const response = await client.get("/characters", {
      params: { offset, limit },
    });
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
  reducers: {
    prevPage: (state, action) => {
      state.offset = (state.offset ?? 0) - action.payload;
    },

    nextPage: (state, action) => {
      state.offset += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.results = action.payload.data.results;
      state.offset = action.payload.data.offset;
      state.limit = action.payload.data.limit;
      state.total = action.payload.data.total;
      state.count = action.payload.data.count;
    });

    builder.addCase(fetchCharacters.pending, (state) => {
      // Add user to the state array
      state.loading = true;
    });

    builder.addCase(fetchCharacterId.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = false;
      state.resultsCharacterId = action.payload.data.results;
    });
    builder.addCase(fetchCharacterId.pending, (state) => {
      // Add user to the state array
      state.loading = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const { nextPage, prevPage } = characterSlice.actions;
export default characterSlice.reducer;
