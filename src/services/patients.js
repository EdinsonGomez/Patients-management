import patientDB from '@/api/patients.json';
import appointments from '@/api/appointments.json';

export const getPatientsList = async () => {
  let patients = [...patientDB];

  patients = patients.map((p) => {
    const last_appointment = appointments.find(({ patient_id }) => patient_id === p.id);
    let data = {...p};

    if (last_appointment) {
      data = {
        ...data,
        ...last_appointment,
      }

      delete data.patient_id;
    }

    return data;
  });

  return patients;
}