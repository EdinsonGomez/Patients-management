import axios from './api';

export const getPatientsList = () => {
  return axios.get('/patients')
    .then((res) => res.data);
}

export const getPatientbyId = (patientId) => {
  return axios.get(`/patients/${patientId}`)
    .then((res) => res.data);
}

export const updatePatient = async (patientId, body) => {
  return axios.put(`/patients/${patientId}`, body)
    .then((res) => res.data);
}