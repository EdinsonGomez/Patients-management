import classNames from "classnames";

function TextCell({
  children,
  className,
}) {
  return (
    <span className={classNames(className)}>{children}</span>
  )
}

export default TextCell