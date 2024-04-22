import './styles.scss';

function Button({
  className,
  type = 'button',
  onClick,
  children,
}) {
  return (
    <button
      className={`btn ${className ?? ''}`}
      type={type}
      onClick={(e) => onClick && onClick(e)}
    >
      {children}
    </button>
  )
}

export default Button