import { TrashIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import SubmitButton from "./SubmitButton";

const btnType = "submit";
const btnVariant = "danger";
const btnClassName = "flex gap-x-2 justify-center items-center flex-1";

function ConfirmDelete({ resourceName, onClose, disabled, isAction }) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8 text-secondary-700">
        آیا از حذف {resourceName} مطمئن هستید؟
      </h2>
      <div className="flex justify-between items-center gap-x-16">
        <Button
          className="flex-1"
          variant="outline"
          onClick={onClose}
          type="button"
        >
          لغو
        </Button>
        {isAction ? (
          <SubmitButton
            type={btnType}
            variant={btnVariant}
            className={btnClassName}
          >
            <TrashIcon className="w-5" />
            <span>حذف</span>
          </SubmitButton>
        ) : (
          <Button
            type={btnType}
            variant={btnVariant}
            disabled={disabled}
            className={btnClassName}
          >
            <TrashIcon className="w-5" />
            <span>حذف</span>
          </Button>
        )}
      </div>
    </div>
  );
}

export default ConfirmDelete;
