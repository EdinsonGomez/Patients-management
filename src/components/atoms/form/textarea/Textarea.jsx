function Textarea({
  id,
  className,
  placeholder = '',
  value,
  onChange,
  rows,
}) {
  return (
    <textarea
      className={`textarea ${className ?? ''}`}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
    />
  )
}

export default Textarea