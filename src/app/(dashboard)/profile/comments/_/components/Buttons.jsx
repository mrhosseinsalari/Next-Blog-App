"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import Modal from "@/ui/Modal";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ChangeCommentStatus from "./ChangeCommentStatus";

export function UpdateComment({ id }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setOpen(true)}>
        <PencilIcon />
      </ButtonIcon>
      <Modal title="ویرایش نظر" open={open} onClose={() => setOpen(false)}>
        <ChangeCommentStatus commentId={id} onClose={() => setOpen(false)} />
      </Modal>
    </>
  );
}

export function DeleteComment({ _id }) {
  return (
    <ButtonIcon variant="outline">
      <TrashIcon className="!text-error" />
    </ButtonIcon>
  );
}
