import BodyCell from "../molecules/table/BodyCell"

const columns = [
  { key: 'id', head: 'ID', type: 'text' },
  { key: 'patient', head: 'Paciente', type: 'link', href: '#' },
  { key: 'identification', head: 'Identificación', type: 'text' },
  { key: 'phone', head: 'Celular', type: 'text' },
  { key: 'eps', head: 'Entidad', type: 'text' },
  { key: 'last_attention', head: 'Ultima Atención', type: 'date' },
  { key: 'appointment_type', head: 'Tipo de Atención', type: 'text' },
  { key: 'status', head: 'Estado', type: 'status' },
]

function PatientsTable({
  data = []
}) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key}>
              {c.head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.values(data).length > 0 && (
          data.map((item) => (
            <tr key={item.id}>
              {columns.map((c) => (
                <BodyCell
                  key={`${item.id}-${c.key}`}
                  type={c.type}
                  variant={c.key === 'status' ? item.status : ''}
                  href={c.key === 'link' ? c.href : ''}
                  value={item[c.key]}
                >
                  {item[c.key]}
                </BodyCell>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

export default PatientsTable