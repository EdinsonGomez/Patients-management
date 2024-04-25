import { useMemo, useState } from "react";
import moment from "moment";
import Input from "@/components/atoms/form/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import "./styles.scss";

function FormEditableControl({
  id,
  className,
  type,
  placeholder,
  value,
  editable = false,
  label,
  onConfirmChange,
}) {
  const [inputValue, setInputValue] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const formatValue = useMemo(() => {
    if (type === "date" && value) {
      return moment(new Date(value)).format("DD/MM/YYYY");
    }

    return value;
  }, [type, value]);

  const onEditClick = () => {
    setInputValue(value);
    setIsEdit(true);
  }

  const onChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onCancelEdit = () => {
    setIsEdit(false);
  }

  const onConfirmEdit = () => {
    onConfirmChange(inputValue);
    setIsEdit(false);
  } 

  return (
    <div className={`form-control ${className ?? ""}`}>
      <label
        htmlFor={id}
        className="form-control__label"
      >
        {label}
        {editable && (
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="form-control__edit-icon"
            onClick={onEditClick}
          />
        )}
      </label>
      {isEdit ? (
        <div className="form-control--edit">
          <Input
            id={id}
            value={inputValue}
            onChange={onChange}
            placeholder={placeholder}
          />

          <FontAwesomeIcon
            icon={faCircleCheck}
            className="form-control__edit-action form-control__edit-action--confirm"
            onClick={onConfirmEdit}
          />
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="form-control__edit-action form-control__edit-action--cancel"
            onClick={onCancelEdit}
          />
        </div>
      ) : (
        <p className="form-control__text">{formatValue}</p>
      )}
    </div>
  );
}

export default FormEditableControl;
