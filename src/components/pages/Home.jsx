import { useState, useEffect } from 'react';
import HomeTemplate from '@/components/template/Home';
import PatientsTable from '@/components/organims/patientsTable/PatientsTable';
import { getPatientsList } from '@/services/patients';
import Modal from '@/components/organims/modal/Modal';

function Home() {
  const [list, setList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getPatientsList()
      .then((res) => {
        setList(res);
      })
  }, [])

  return (
    <HomeTemplate>
      <PatientsTable data={list} />
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title='Información Paciente'
      >
        <div>
          Este es un modal
        </div>
      </Modal>
      <button onClick={() => setOpenModal(true)}>Abrir modal</button>
    </HomeTemplate>
  )
}

export default Home