import patientDB from '@/api/patients.json';
import appointmentsDB from '@/api/appointments.json';
import moment from 'moment';

export const getPatientsList = async () => {
  let patients = [...patientDB];

  patients = patients.map((p) => {
    let appointments = appointmentsDB.filter(({ patient_id }) => patient_id === p.id);
    let data = {...p};

    if (appointments.length !== 0) {
      appointments.sort((a, b) => {
        return new Date(b.last_attention) - new Date(a.last_attention);
      });

      const appointmentData = {...appointments[0]};
      appointmentData.appointment_id = appointmentData.id;

      delete appointmentData.id;

      data = {
        ...data,
        ...appointmentData,
      }
    }

    return data;
  });

  return patients;
}

export const getPatientbyId = async (patientId) => {
  let patientData = patientDB.find(({ id }) => id === patientId);

  if (patientData) {
    patientData.age = moment().diff(moment(patientData.birthdate), 'y');
  }

  return patientData ?? {};
}

export const updatePatient = async (patientId, body) => {
  const patientIdx = patientDB.findIndex(({ id }) => id === patientId);

  const updatedPatient = {
    ...patientDB[patientIdx],
    ...body
  };

  patientDB.splice(patientIdx, 1, updatedPatient);

  return patientDB[patientIdx];
}