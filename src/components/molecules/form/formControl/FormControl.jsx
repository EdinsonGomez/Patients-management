import './styles.scss';

function FormControl({
  className,
  htmlFor,
  label,
  children
}) {
  return (
    <div className={`form-control ${className ?? ''}`}>
      <label htmlFor={htmlFor} className='form-control__label'>{label}</label>
      {children}
    </div>
  )
}

export default FormControl