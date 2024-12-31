"use client";
import React, { useState } from "react";

export const TagsInput = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState<string>("");
  const handleAddTag = () => {
    setTags([...tags, tag]);
    setTag("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  const handleDelete = (index: number) => () => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };
  return (
    <div className="block text-sm/6 font-medium text-gray-900">
      <label htmlFor="tags">Тэги</label>
      <div className="border border-gray-200 rounded-3xl p-4 space-y-2">
        {!!tags.length && (
          <ul className="flex gap-1">
            {tags.map((e, i) => {
              return (
                <li
                  key={i}
                  className="bg-white border hover:bg-gray-100 border-gray-300 font-medium rounded-full text-sm px-5 py-1 mb-1 max-w-fit relative m-0 p-0 overflow-hidden"
                >
                  {e}
                  <button
                    type="button"
                    className="w-full h-full text-red-500 opacity-0 hover:opacity-100 hover:text-red-600 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center"
                    onClick={handleDelete(i)}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        <div className="relative">
          <input
            value={tag}
            type="text"
            className="rounded-2xl block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-200 sm:text-sm/6"
            multiple
            placeholder="tags"
            onChange={handleChange}
            name="tags"
            id="tags"
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="absolute px-3 py-1 bg-pink-500 text-white rounded-full right-1 top-1/2 -translate-y-1/2"
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};
