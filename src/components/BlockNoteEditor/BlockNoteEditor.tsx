"use client";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import cloudinary from "@/lib/cloudinary";
import { assert } from "@/utils";

export const BlockNoteEditor = <T extends { content: string | null }>({
  data,
  editable,
  onSubmit,
}: {
  data: T;
  editable?: boolean;
  onSubmit?: ({ content }: { content: string }) => Promise<never>;
}) => {
  const editor = useCreateBlockNote({
    initialContent: data?.content && JSON.parse(data?.content),
    uploadFile: async (file) => {
      assert(file.type.includes("image"), "file image is required");
      const response = await (await (await cloudinary()).upload(file)).json();
      return Promise.resolve(response.url);
    },
  });

  const handleSubmit = async () => {
    onSubmit?.({ content: JSON.stringify(editor.document) });
  };
  return (
    <>
      {editable && (
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-full fixed bottom-4 right-4 z-1"
        >
          Сохранить
        </button>
      )}

      <BlockNoteView
        editor={editor}
        editable={editable}
        className="min-w-full w-full min-h-screen mt-14 mb-96"
        theme="light"
      />
    </>
  );
};
