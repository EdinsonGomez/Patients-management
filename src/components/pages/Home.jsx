import HomeTemplate from '@/components/template/Home';
import PatientsTable from '../organims/PatientsTable';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPatientsList } from '@/services/patients';

function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getPatientsList()
      .then((res) => {
        setList(res);
      })
  }, [])

  return (
    <HomeTemplate>
      <PatientsTable data={list} />
    </HomeTemplate>
  )
}

export default Home