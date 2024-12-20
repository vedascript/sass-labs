import { FC } from "react";

type ErrorMessageProps = {
  errorMessage: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ errorMessage }) => {
  return (
    <tr>
      <td colSpan={3} className="error-cell">
        {errorMessage}
      </td>
    </tr>
  );
};

export default ErrorMessage;
