"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import Modal from "@/ui/Modal";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import ChangeCommentStatus from "./ChangeCommentStatus";
import { useFormState } from "react-dom";
import { removeComment } from "@/lib/actions";
import toast from "react-hot-toast";
import ConfirmDelete from "@/ui/ConfirmDelete";

export function UpdateComment({ id }) {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsEditOpen(true)}>
        <PencilIcon />
      </ButtonIcon>
      <Modal
        title="ویرایش نظر"
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
      >
        <ChangeCommentStatus
          commentId={id}
          onClose={() => setIsEditOpen(false)}
        />
      </Modal>
    </>
  );
}

export function DeleteComment({ id }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [state, formAction] = useFormState(removeComment, {
    error: "",
    message: "",
  });

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      setIsDeleteOpen(false);
    }
    if (state?.error) toast.error(state.error);
  }, [state]);

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsDeleteOpen(true)}>
        <TrashIcon className="!text-error" />
      </ButtonIcon>
      <Modal
        title="حذف نظر"
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <form
          action={async (formData) => {
            await formAction({ formData, id });
          }}
        >
          <ConfirmDelete
            resourceName="این نظر"
            onClose={() => setIsDeleteOpen(false)}
            isAction
          />
        </form>
      </Modal>
    </>
  );
}
