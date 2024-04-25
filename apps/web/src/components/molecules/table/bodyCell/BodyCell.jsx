import DateCell from "@/components/atoms/table/DateCell";
import LinkCell from "@/components/atoms/table/LinkCell";
import StatusCell from "@/components/atoms/table/statusCell/StatusCell";
import TextCell from "@/components/atoms/table/TextCell";
import './styles.scss';

function BodyCell({
  className = "",
  type = "text",
  value = "",
  variant,
  href,
  children,
}) {
  return (
    <td className={className}>
      {type === "text" && <TextCell>{children}</TextCell>}

      {type === "date" && <DateCell value={value} />}

      {type === "status" && (
        <StatusCell variant={variant}>
          {children}
        </StatusCell>
      )}

      {type === "link" && (
        <LinkCell href={href} className="body-cell--link">
          {children}
        </LinkCell>
      )}
    </td>
  );
}

export default BodyCell;
