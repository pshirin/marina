"use client";
import { createProject } from "@/actions/crud";
import Link from "next/link";
import { SliderInput } from "../SliderInput";
import { LogoInput } from "../LogoInput";
import { TagsInput } from "../TagsInput";
import { useState } from "react";

export const CreateProjectModalForm = () => {
  const [posters, setPosters] = useState<File[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const changeSliderHandler = (e: File[]) => {
    setPosters(e);
  };
  const changeTagsHandler = (e: string[]) => {
    setTags(e);
  };

  const submitHandler = async (formData: FormData) => {
    posters.forEach((p, i) => formData.append(`poster-${i}`, p));
    formData.append("tags-arr", JSON.stringify(tags));
    await createProject(formData);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm backdrop-brightness-50 z-50">
      <form
        action={submitHandler}
        className="flex flex-col gap-4 bg-white p-10 border border-pink-300 rounded-2xl z-10 w-3/4 max-h-full overflow-y-auto"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Имя проекта
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              placeholder="name"
              required
              className="rounded-2xl block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-200 sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="prodUrl"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Ссылка на прод
          </label>
          <div className="mt-2">
            <input
              type="url"
              id="prodUrl"
              name="prodUrl"
              placeholder="prodUrl"
              className="rounded-2xl block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-200 sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Описание проекта
          </label>
          <div className="mt-2">
            <textarea
              id="description"
              name="description"
              placeholder="description"
              required
              className="rounded-2xl block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-200 sm:text-sm/6"
            />
          </div>
        </div>
        <SliderInput onChange={changeSliderHandler} />
        <LogoInput />
        <TagsInput onChange={changeTagsHandler} />
        <div className="flex justify-between">
          <Link
            className="mt-4 px-4 py-2 bg-black text-white rounded-full"
            href="/"
            aria-label="Close modal"
          >
            Отмена
          </Link>
          <button
            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-full"
            type="submit"
          >
            Опубликовать
          </button>
        </div>
      </form>
    </div>
  );
};
