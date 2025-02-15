import { useForm } from "react-hook-form";
import useChangeCommentStatus from "../useChangeCommentStatus";
import { useRouter } from "next/navigation";
import RHFSelect from "@/ui/RHFSelect";
import Button from "@/ui/Button";
import SvgLoader from "@/ui/SvgLoader";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeCommentStatus({ commentId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeCommentStatus } = useChangeCommentStatus();
  const router = useRouter();

  const onSubmit = (data) => {
    changeCommentStatus(
      { commentId, data },
      {
        onSuccess: () => {
          onClose();
          router.refresh();
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="تغییر وضعیت"
          register={register}
          isRequired
          options={options}
        />
        <div className="mt-8">
          <Button
            disabled={isUpdating}
            className="w-full flex justify-center items-center gap-x-4"
          >
            <span>تایید</span>
            {isUpdating && <SvgLoader />}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ChangeCommentStatus;
