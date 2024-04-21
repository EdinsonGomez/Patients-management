import classNames from "classnames";
import { useMemo } from "react";

function LinkCell({
  className,
  href,
  children,
}) {
  const classProps = useMemo(() => (
    classNames(className)
  ), [className]);

  return (
    <a
      className={classProps}
      href={href}
    >
      {children}
    </a>
  )
}

export default LinkCell