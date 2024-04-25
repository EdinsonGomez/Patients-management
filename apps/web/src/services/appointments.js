import axios from './api';

export const createNewAppointment = async (body) => {
  return axios.post('/appointments/create', body)
    .then((res) => res.data);
}

export const deleteAppointment = async (appointmentId) => {
  return axios.delete(`/appointments/${appointmentId}`)
    .then((res) => res.data);
}