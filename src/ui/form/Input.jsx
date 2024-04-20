function Input({
  mode,
  value,
  type,
  onChange
}) {
  return (
    <>
      {mode === 'view' && (
        <span>{value}</span>
      )}

      {mode === 'edit' && (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange && onChange(e)}
        />
      )}
    </>
  )
}

export default Input