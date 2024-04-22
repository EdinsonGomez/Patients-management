import './styles.scss';

function Input({
  className,
  id,
  value,
  placeholder = '',
  onChange,
}) {
  return (
    <input
      className={`input ${className ?? ''}`}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange && onChange(e)}
    />
  )
}

export default Input