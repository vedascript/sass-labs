import { FC } from "react";
import { formatIntoInr } from "./utils";
import { ApiResponse } from "./types";

type TableBodyProps = {
  rows: Array<ApiResponse>;
};

const TableBody: FC<TableBodyProps> = ({ rows }) => {
  return (
    <tbody>
      {rows.map((row) => (
        <tr key={row["s.no"]}>
          <td>{row["s.no"]}</td>
          <td>{formatIntoInr(row["percentage.funded"]) || "--"}</td>
          <td>{formatIntoInr(row["amt.pledged"]) || "--"}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
