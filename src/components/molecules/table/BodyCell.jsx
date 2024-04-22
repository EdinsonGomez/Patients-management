import DateCell from "@/components/atoms/table/DateCell";
import LinkCell from "@/components/atoms/table/LinkCell";
import StatusCell from "@/components/atoms/table/StatusCell";
import TextCell from "@/components/atoms/table/TextCell";

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
        <LinkCell href={href}>
          {children}
        </LinkCell>
      )}
    </td>
  );
}

export default BodyCell;
