import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

function Note({
  data
}) {
  return (
    <div>
      <div>
        <p>{data?.doctor_name ?? ''}</p>
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
      <p>{data?.speciality ?? ''}</p>
      <p>{data?.observation ?? ''}</p>
    </div>
  )
}

export default Note;