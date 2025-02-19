import ButtonIcon from "@/ui/ButtonIcon";
import FileInput from "@/ui/FileInput";
import { imageUrlToFile } from "@/utils/fileFormatter";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useEditUserAvatar from "./useEditUserAvatar";
import { useRouter } from "next/navigation";
import SpinnerMini from "@/ui/SpinnerMini";
import Button from "@/ui/Button";

function EditAvatarForm({ avatar, prevAvatarUrl }) {
  const [avatarUrl, setAvatarUrl] = useState(prevAvatarUrl || null);
  const { isEditing, editUserAvatar } = useEditUserAvatar();
  const [isShowSubmitBtn, setIsShowSubmitBtn] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    defaultValues: { avatar },
  });

  useEffect(() => {
    async function fetchMyApi() {
      if (prevAvatarUrl) {
        // convert prev link to file
        const file = await imageUrlToFile(prevAvatarUrl);
        setValue("avatar", file);
      }
    }
    fetchMyApi();
  }, []);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("avatar", data.avatar);

    editUserAvatar(formData, {
      onSuccess: () => {
        router.refresh();
      },
    });
  };

  return (
    <form className="form items-center" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="avatar"
        control={control}
        rules={{ required: "تصویر پروفایل الزامی است" }}
        render={({ field: { value, onChange } }) => {
          return (
            <FileInput
              className="w-full"
              label="انتخاب تصویر پروفایل"
              name="avatar"
              value={value?.fileName}
              errors={errors}
              onChange={(event) => {
                const file = event.target.files[0];
                onChange(file);
                setAvatarUrl(URL.createObjectURL(file));
                setIsShowSubmitBtn(true);
                event.target.value = null;
              }}
            />
          );
        }}
      />

      {avatarUrl && (
        <>
          <div className="relative block w-64 h-64 overflow-hidden rounded-full">
            <Image
              fill
              alt="user-avatar"
              src={avatarUrl}
              className="object-cover object-center"
            />
            <ButtonIcon
              variant="red"
              className="w-6 h-6 absolute bottom-0 right-28"
              onClick={() => {
                setAvatarUrl(null);
                setValue("avatar", null);
              }}
            >
              <XMarkIcon />
            </ButtonIcon>
          </div>
          {isEditing ? (
            <SpinnerMini />
          ) : (
            <Button
              type="submit"
              className={`w-full bg-green-600 hover:bg-green-500 
              ${!isShowSubmitBtn && "hidden"}`}
            >
              ثبت تصویر جدید
            </Button>
          )}
        </>
      )}
    </form>
  );
}

export default EditAvatarForm;
