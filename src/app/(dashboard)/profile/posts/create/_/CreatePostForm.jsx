"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import RHFTextField from "@/ui/RHFTextField";
import RHFSelect from "@/ui/RHFSelect";
import useCategories from "@/hooks/useCategories";
import { useState } from "react";
import Image from "next/image";
import ButtonIcon from "@/ui/ButtonIcon";
import { XMarkIcon } from "@heroicons/react/24/outline";
import FileInput from "@/ui/FileInput";

const schema = yup.object();

function CreatePostForm() {
  const { categories } = useCategories();
  const [coverImageUrl, setCoverImageUrl] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
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
        options={categories}
      />
      <Controller
        name="coverImage"
        control={control}
        rules={{ required: "کاور پست الزامی است" }}
        render={({ field: { value, onChange } }) => {
          return (
            <FileInput
              label="انتخاب کاور پست"
              name="coverImage"
              value={value?.fileName}
              onChange={(event) => {
                const file = event.target.files[0];
                console.log(file);
                onChange(file);
                setCoverImageUrl(URL.createObjectURL(file));
                event.target.value = null;
              }}
            />
          );
        }}
      />
      {coverImageUrl && (
        <div className="relative block aspect-video overflow-hidden rounded-lg">
          <Image
            fill
            alt="cover-image"
            src={coverImageUrl}
            className="object-cover object-center"
          />
          <ButtonIcon
            variant="red"
            className="w-6 h-6 absolute top-3 left-3"
            onClick={() => {
              setCoverImageUrl(null);
              setValue("coverImage", null);
            }}
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}
    </form>
  );
}

export default CreatePostForm;
