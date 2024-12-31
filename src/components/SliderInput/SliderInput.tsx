"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Slider } from "..";

export const SliderInput = ({
  onChange,
}: {
  onChange?: (imgs: File[]) => void;
}) => {
  const [imgs, setImgs] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const handlePick = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const filesUrls = Array.from(files).map((file) => {
      return URL.createObjectURL(file);
    });

    setImgs((p) => [...(p ?? []), ...filesUrls]);
    setFiles((p) => [...(p ?? []), ...Array.from(files)]);
  };

  const handleDelete = (index: number) => {
    const newImgs = [...imgs];
    newImgs.splice(index, 1);
    setImgs(newImgs);

    setFiles((p) => {
      const newFiles = [...p];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };
  useEffect(() => {
    onChange?.(files);
  }, [files]);
  return (
    <>
      <label
        htmlFor="poster"
        className="block text-sm/6 font-medium text-gray-900"
      >
        Слайдер
      </label>
      <div className="border border-gray-200 rounded-3xl p-4 space-y-2">
        <Slider imgs={imgs} onDelete={handleDelete} />
        <input
          multiple
          onChange={handlePick}
          type="file"
          id="poster"
          className="hidden"
        />
        <label
          htmlFor="poster"
          className="cursor-pointer hover:bg-gray-100 block w-fit border me-4 py-3 px-4 bg-gray-50 rounded-3xl"
        >
          Добавить файл в слайдер
        </label>
      </div>
    </>
  );
};
