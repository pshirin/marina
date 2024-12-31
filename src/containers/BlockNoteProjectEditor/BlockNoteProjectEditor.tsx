"use client";
import { updateAboutContent } from "@/actions/crud";
import { BlockNoteEditor } from "@/components";

import { redirect, RedirectType } from "next/navigation";
import React from "react";

export const BlockNoteProjectEditor = ({ data }: { data: string }) => {
  const handleSubmit = async ({ content }: { content: string }) => {
    const formData = new FormData();
    formData.append("content", content);
    await updateAboutContent(formData);
    redirect(`/about`, RedirectType.replace);
  };

  return (
    <BlockNoteEditor
      editable
      data={{ content: data }}
      onSubmit={handleSubmit}
    />
  );
};
