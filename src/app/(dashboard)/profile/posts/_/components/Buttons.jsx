"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import useDeletePost from "../useDeletePost";
import { useRouter } from "next/navigation";

export function CreatePost() {
  return (
    <Link
      href="/profile/posts/create"
      className="justify-self-center md:justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0
      transition-colors hover:bg-primary-700"
    >
      <span>ایجاد پست</span>
      <PlusIcon className="w-5" />
    </Link>
  );
}

export function DeletePost({ post: { _id, title } }) {
  const [open, setOpen] = useState(false);
  const { isDeleting, deletePost } = useDeletePost();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    deletePost(_id, {
      onSuccess: () => {
        setOpen(false);
        router.refresh();
      },
    });
  };

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setOpen(true)}>
        <TrashIcon className="!text-error" />
      </ButtonIcon>
      <Modal
        title={`حذف پست ${title}`}
        open={open}
        onClose={() => setOpen(false)}
      >
        <form onSubmit={handleSubmit}>
          <ConfirmDelete
            resourceName={`پست ${title}`}
            onClose={() => setOpen(false)}
            disabled={isDeleting}
          />
        </form>
      </Modal>
    </>
  );
}

export function UpdatePost({ id }) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant="outline">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}
