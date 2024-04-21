import classNames from "classnames";
import { useMemo } from "react";

const VARIANT_THEME = {
  default: 'status-cell--default',
  stable: 'status-cell--stable',
  moderate: 'status-cell--stable',
  critical: 'status-cell--critical',
}

function StatusCell({
  children,
  className,
  variant,
}) {
  const classProps = useMemo(() => (
    classNames(className)
  ), [className, variant]);

  return (
    <span className={classProps}>{children}</span>
  )
}

export default StatusCell