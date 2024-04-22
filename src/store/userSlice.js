import { getUserById } from "@/services/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    data: {},
    loading: false,
    error: null,
  }
}

export const fetchUserById = createAsyncThunk(
  'user/fetchById',
  async (userId) => {
    const response = await getUserById(userId);
    return response;
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state) => {
      state.userData = {
        data: {},
        loading: true,
        error: null
      }
    });

    builder.addCase(fetchUserById.rejected, (state) => {
      state.userData = {
        data: {},
        loading: false,
        error: {
          message: 'Ups ha ocurrido un error'
        }
      }
    });

    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.userData = {
        data: action.payload,
        loading: false,
        error: null
      }
    })
  }
});

export default userSlice.reducer;