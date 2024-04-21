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
    <td>
      {type === "text" && <TextCell className={className}>{children}</TextCell>}

      {type === "date" && <DateCell className={className} value={value} />}

      {type === "status" && (
        <StatusCell className={className} variant={variant}>
          {children}
        </StatusCell>
      )}

      {type === "link" && (
        <LinkCell className={className} href={href}>
          {children}
        </LinkCell>
      )}
    </td>
  );
}

export default BodyCell;
