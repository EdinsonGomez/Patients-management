import classNames from "classnames";
import "./styles.scss";

const VARIANT_THEME = {
  default: "status-cell--default",
  stable: "status-cell--stable",
  moderate: "status-cell--moderate",
  critical: "status-cell--critical",
};

const textStatus = {
  stable: "Estable",
  moderate: "Moderado",
  critical: "Critico",
}

function StatusCell({
  className,
  variant,
  value,
}) {
  return (
    <span
      className={classNames("status-cell", VARIANT_THEME[variant], className)}
    >
      {textStatus?.[variant] ?? value}
    </span>
  );
}

export default StatusCell;
