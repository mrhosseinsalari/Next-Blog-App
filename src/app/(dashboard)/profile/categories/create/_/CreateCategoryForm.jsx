"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import SpinnerMini from "@/ui/SpinnerMini";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import useCreateCategory from "./useCreateCategory";
import { useRouter } from "next/navigation";

const schema = yup
  .object({
    title: yup
      .string()
      .min(3, "حداقل ۳ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    englishTitle: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان انگلیسی ضروری است"),
    description: yup
      .string()
      .min(10, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
  })
  .required();

function CreateCategoryForm() {
  const { isCreating, createCategory } = useCreateCategory();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    createCategory(data, {
      onSuccess: () => {
        router.push("/profile/categories");
        router.refresh();
      },
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        name="title"
        label="عنوان"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        name="englishTitle"
        label="عنوان انگلیسی"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        name="description"
        label="توضیحات"
        register={register}
        errors={errors}
        isRequired
      />
      {isCreating ? (
        <SpinnerMini />
      ) : (
        <Button variant="primary" type="submit" className="w-full">
          تایید
        </Button>
      )}
    </form>
  );
}

export default CreateCategoryForm;
