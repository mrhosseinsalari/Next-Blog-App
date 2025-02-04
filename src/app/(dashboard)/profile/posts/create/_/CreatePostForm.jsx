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
import Button from "@/ui/Button";
import useCreatePost from "./useCreatePost";
import { useRouter } from "next/navigation";
import SpinnerMini from "@/ui/SpinnerMini";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    briefText: yup
      .string()
      .min(10, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    text: yup
      .string()
      .min(10, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    slug: yup.string().required("اسلاگ ضروری است"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("زمان مطالعه ضروری است")
      .typeError("یک عدد را وارد کنید"),
    category: yup.string().required("دسته بندی ضروری است"),
  })
  .required();

function CreatePostForm() {
  const { categories } = useCategories();
  const [coverImageUrl, setCoverImageUrl] = useState(null);
  const { isCreating, createPost } = useCreatePost();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    createPost(formData, {
      onSuccess: () => {
        router.push("/profile/posts");
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
        options={[
          {
            label: "انتخاب کنید",
            value: "",
          },
          ...categories,
        ]}
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
              errors={errors}
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

export default CreatePostForm;
