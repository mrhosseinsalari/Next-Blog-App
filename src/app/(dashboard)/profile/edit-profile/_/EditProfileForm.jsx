import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import useEditUserProfile from "./useEditUserProfile";
import { useRouter } from "next/navigation";
import SpinnerMini from "@/ui/SpinnerMini";

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "نام و نام خانوادگی نامعتبر است")
      .max(30)
      .required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  })
  .required();

function EditProfileForm({ userToEdit }) {
  const { name, email, avatar, avatarUrl: prevAvatarUrl } = userToEdit;
  const editValues = { name, email };

  const { isEditing, editUserProfile } = useEditUserProfile();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: editValues,
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    editUserProfile(data, {
      onSuccess: () => {
        router.refresh();
      },
    });
  };

  return (
    <>
      <form className="form mb-8" onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          isRequired
          errors={errors}
        />
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          dir="ltr"
          isRequired
          errors={errors}
        />
        {isEditing ? (
          <SpinnerMini />
        ) : (
          <Button variant="primary" type="submit" className="w-full">
            ویرایش مشخصات
          </Button>
        )}
      </form>
    </>
  );
}

export default EditProfileForm;
