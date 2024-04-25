import moment from "moment";
import classNames from "classnames";
import { useMemo } from "react";

function DateCell({
  className,
  value,
}) {
  const formatValue = useMemo(() => {
    if (!value) return '';

    return moment(value).format('DD/MM/YYYY');
  }, [value]);

  return (
    <span className={classNames(className)}>{formatValue}</span>
  )
}

export default DateCell