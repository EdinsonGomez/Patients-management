import { getPatientbyId } from "@/services/patients";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientInfo: {
    data: {},
    loading: false,
    error: null
  }
}

export const fetchPatientById = createAsyncThunk(
  'patient/fetchPatientById',
  async (patientId) => {
    const response = await getPatientbyId(patientId);
    return response;
  }
)

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPatientById.pending, (state) => {
      state.patientInfo = {
        data: {},
        loading: true,
        error: null
      }
    });

    builder.addCase(fetchPatientById.rejected, (state) => {
      state.patientInfo = {
        data: {},
        loading: false,
        error: {
          message: 'Ups ha ocurrido un error'
        }
      }
    });

    builder.addCase(fetchPatientById.fulfilled, (state, action) => {
      state.patientInfo = {
        data: action.payload,
        loading: false,
        error: null
      }
    })
  }
});

export default patientSlice.reducer;