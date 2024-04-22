import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import './styles.scss';

function Note({
  className,
  data,
}) {
  return (
    <div className={`note ${className ?? ''}`}>
      <div className="note__header">
        <p className="note__doctor">{data?.doctor_name ?? ''}</p>
        <FontAwesomeIcon icon={faTrashCan} className="note__remove-icon" />
      </div>
      <p className="note__speciality">{data?.speciality ?? ''}</p>
      <p className="note__observation">{data?.observation ?? ''}</p>
    </div>
  )
}

export default Note;