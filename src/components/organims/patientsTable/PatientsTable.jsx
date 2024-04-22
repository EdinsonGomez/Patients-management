import BodyCell from "@/components/molecules/table/bodyCell/BodyCell";
import "./styles.scss";
import { useSelector } from "react-redux";

const columns = [
  { key: "id", head: "ID", type: "text" },
  { key: "name", head: "Paciente", type: "link", href: "#" },
  { key: "identification", head: "Identificación", type: "text" },
  { key: "phone", head: "Celular", type: "text" },
  { key: "eps", head: "Entidad", type: "text" },
  { key: "last_attention", head: "Ultima Atención", type: "date" },
  { key: "appointment_type", head: "Tipo de Atención", type: "text" },
  { key: "status", head: "Estado", type: "status" },
];

function PatientsTable({ onClickRow }) {
  const { data } = useSelector((state) => state.patientsList.list);

  return (
    <div className="table">
      <table className="table__container">
        <thead className="table__thead">
          <tr className="table__row-head">
            {columns.map((c) => (
              <td key={c.key} className="table__head-cell">
                {c.head}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="table__tbody">
          {Object.values(data).length > 0 &&
            data.map((item) => (
              <tr
                key={item.id}
                className="table__row-body"
                onClick={() => onClickRow && onClickRow(item)}
              >
                {columns.map((c) => (
                  <BodyCell
                    className="table__body-cell"
                    key={`${item.id}-${c.key}`}
                    type={c.type}
                    variant={c.key === "status" ? item.status : ""}
                    href={c.key === "link" ? c.href : ""}
                    value={item[c.key]}
                  >
                    {item[c.key]}
                  </BodyCell>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientsTable;
