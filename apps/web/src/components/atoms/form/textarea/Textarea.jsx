import './styles.scss';

function Textarea({
  id,
  className,
  placeholder = '',
  value,
  onChange,
  rows,
  required,
}) {
  return (
    <textarea
      className={`textarea ${className ?? ''}`}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      required={required}
    />
  )
}

export default Textarea