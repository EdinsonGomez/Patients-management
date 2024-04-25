import { getPatientsList } from "@/services/patients";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    data: [],
    loading: false,
    error: null
  }
}

export const fetchPatientsList = createAsyncThunk(
  'patientsList/fetchList',
  async () => {
    const response = await getPatientsList();
    return response;
  }
)

const patientsListSlice = createSlice({
  name: 'patientsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPatientsList.pending, (state) => {
      state.list = {
        data: [],
        loading: true,
        error: null
      }
    });

    builder.addCase(fetchPatientsList.fulfilled, (state, action) => {
      state.list = {
        data: action.payload,
        loading: false,
        error: null
      }
    });

    builder.addCase(fetchPatientsList.rejected, (state) => {
      state.list = {
        data: [],
        loading: false,
        error: {
          message: 'Upps ha ocurrido un error'
        }
      }
    })
  }
});

export default patientsListSlice.reducer;
