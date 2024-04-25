import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormEditableControl from "@/components/molecules/form/formControl/FormEditableControl";
import FormControl from "@/components/molecules/form/formControl/FormControl";
import Textarea from "@/components/atoms/form/textarea/Textarea";
import Button from "@/components/atoms/button/Button";
import Note from "@/components/molecules/note/Note";
import { updatePatient } from "@/services/patients";
import { createNewAppointment, deleteAppointment } from "@/services/appointments";
import { fetchPatientById } from "@/store/patientSlice";
import { fetchPatientsList } from "@/store/patientsListSlice";
import './styles.scss';

const viewConfig = [
  { key: 'name', label: 'Paciente', classNames: 'info__item--full' },
  { key: 'birthdate', label: 'Fecha de Nacimiento', type: 'date' },
  { key: 'age', label: 'Edad' },
  { key: 'identification_type', label: 'Tipo de identificacion' },
  { key: 'identification', label: 'N° de Identificacion' },
  { key: 'mobile', label: 'Celular', editable: true },
  { key: 'phone', label: 'Telefono' },
  { key: 'address', label: 'Dirección' },
  { key: 'occupation', label: 'Ocupación' },
]

const appointments_types = {
  "medicina_general": "Consulta por Medicina General",
  "psiquiatría": "Consulta por Psiquiatría",
  "psicología": "Consulta por Psicología",
}

function PatientInfo() {
  const dispatch = useDispatch();

  const [observation, setObservation] = useState('');
  const [notes, setNotes] = useState([]);
  const { data } = useSelector((state) => state.patient.patientInfo);
  const { data: userData } = useSelector((state) => state.user.userData);

  const onChange = ({ target }) => {
    setObservation(target.value);
  };

  const onCheckIn = (e) => {
    e.preventDefault();
  
    const speciality = userData.speciality.toLowerCase().replace(' ', '_');
    const appointment_type = appointments_types[speciality];

    const appointmentData = {
      appointment_type,
      observation,
      patient_id: data.id,
      doctor_id: userData.id,
    }

    createNewAppointment(appointmentData)
      .then((res) => {
        console.log("appointment created: ", res);
        dispatch(fetchPatientsList());

        const noteData = {
          id: res.id,
          doctor_name: userData.name,
          speciality: userData.speciality,
          observation: res.observation,
        }

        setNotes([
          ...notes,
          noteData,
        ]);

        setObservation('');
      })

  }

  const onUpdateField = (field) => (value) => {
    const updatedData = { ...data };

    updatedData[field] = value;

    updatePatient(data.id, updatedData)
      .then(() => {
        dispatch(fetchPatientById(data.id));
        dispatch(fetchPatientsList());
      })
      .catch((error) => {
        console.error("Error update patient: ", error);
      });
  }

  const onDeleteNote = (appointmentId) => {
    deleteAppointment(appointmentId)
      .then((res) => {
        console.log('delete res: ', res);

        const updatedNotes = notes.filter(({ id }) => id !== appointmentId);
        
        setNotes(updatedNotes);
        dispatch(fetchPatientsList());
      })
      .catch((error) => {
        console.error("Delete appointment error: ", error);
      })
  }

  return (
    <div className="info">
      {viewConfig.map((conf) => (
        <FormEditableControl
          key={conf.key}
          className={`info__item ${conf?.classNames ?? ''}`}
          label={conf.label}
          value={data?.[conf.key] ?? '--'}
          type={conf?.type ?? 'text'}
          editable={conf.editable}
          onConfirmChange={onUpdateField(conf.key)}
        />
      ))}
      <form className="info__item--full" onSubmit={onCheckIn}>
        <FormControl
          htmlFor="observation"
          label="Agregar Observación"
        >
          <Textarea
            id="observation"
            placeholder="Observación"
            rows={9}
            value={observation}
            onChange={onChange}
            required
          />
        </FormControl>

        <div className="info__actions">
          <Button type="submit">Guardar</Button>
        </div>
      </form>

      <div className="info__notes info__item--full">
        {notes.map((n) => (
          <Note
            key={n.id}
            data={n}
            onClickDelete={() => onDeleteNote(n.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default PatientInfo