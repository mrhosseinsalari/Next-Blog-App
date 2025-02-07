"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export function UpdateComment({ id }) {
  return (
    <ButtonIcon variant="outline">
      <PencilIcon />
    </ButtonIcon>
  );
}

export function DeleteComment({ _id }) {
  return (
    <ButtonIcon variant="outline">
      <TrashIcon className="!text-error" />
    </ButtonIcon>
  );
}
