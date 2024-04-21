import classNames from "classnames";
import { useMemo } from "react";

function Input({
  className,
  id,
  value,
  placeholder,
  onChange,
}) {
  const classProps = useMemo(() => (
    classNames(className)
  ), [className]);

  return (
    <input
      className={classProps}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange && onChange(e)}
    />
  )
}

export default Input