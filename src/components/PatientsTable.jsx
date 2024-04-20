import StatusCell from '@/ui/table/StatusCell';
import DateCell from '@/ui/table/DateCell';
import LinkCell from '@/ui/table/LinkCell';

const columns = [
  { key: 'id', head: 'ID', type: 'text' },
  { key: 'patient', head: 'Paciente', type: 'link' },
  { key: 'identification', head: 'Identificación', type: 'text' },
  { key: 'phone', head: 'Celular', type: 'text' },
  { key: 'eps', head: 'Entidad', type: 'text' },
  { key: 'last_attention', head: 'Ultima Atención', type: 'date' },
  { key: 'type_attention', head: 'Tipo de Atención', type: 'text' },
  { key: 'status', head: 'Estado', type: 'status' },
]

function PatientsTable({
  data = {}
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
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((c) => (
              <td key={`${item.id}-${c.key}`}>
                {c.type === 'date' && (
                  <DateCell value={item[c.key]} />
                )}

                {c.type === 'link' && (
                  <LinkCell value={item[c.key]} />
                )}

                {c.type === 'status' && (
                  <StatusCell value={item[c.key]} />
                )}

                {c.type === 'text' && (
                  <td>{item[c.key]}</td>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PatientsTable