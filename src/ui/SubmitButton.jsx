import { useFormStatus } from "react-dom";
import Button from "./Button";
import SvgLoader from "./SvgLoader";

function SubmitButton({ children, className, ...rest }) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className={`flex items-center justify-center gap-x-4 py-4 w-full ${className}`}
      {...rest}
    >
      {children}
      {pending && <SvgLoader />}
    </Button>
  );
}

export default SubmitButton;
