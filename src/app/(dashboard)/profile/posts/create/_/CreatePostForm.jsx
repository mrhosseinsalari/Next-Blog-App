"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import RHFTextField from "@/ui/RHFTextField";
import RHFSelect from "@/ui/RHFSelect";

const schema = yup.object();

function CreatePostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  return (
    <form className="form">
      <RHFTextField
        name="title"
        label="عنوان"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        name="briefText"
        label="متن کوتاه"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        name="text"
        label="متن"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        name="slug"
        label="اسلاگ"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        name="readingTime"
        label="زمان مطالعه"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFSelect
        name="category"
        label="دسته بندی"
        register={register}
        errors={errors}
        isRequired
        options={[]}
      />
    </form>
  );
}

export default CreatePostForm;
