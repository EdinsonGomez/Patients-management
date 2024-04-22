function LinkCell({
  className,
  href,
  children,
}) {
  return (
    <a
      className={className}
      href={href}
    >
      {children}
    </a>
  )
}

export default LinkCell