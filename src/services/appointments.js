import appointmentsDB from '@/api/appointments.json';

export const createNewAppointment = async (body) => {
  const id = appointmentsDB[appointmentsDB.length - 1].id + 1;

  appointmentsDB.push({
    ...body,
    id,
  });

  return appointmentsDB[appointmentsDB.length - 1];
}