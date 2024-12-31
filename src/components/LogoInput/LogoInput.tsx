"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";

export const LogoInput = () => {
  const [logo, setLogo] = useState<string>();

  const handlePick = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const fileUrls = URL.createObjectURL(files[0]);
    setLogo(fileUrls);
  };

  const handleDelete = () => {
    setLogo(undefined);
  };

  return (
    <div>
      <>
        <label
          htmlFor="logo"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Лого
        </label>
        <div className="border border-gray-200 rounded-3xl p-4 space-y-2">
          {logo && (
            <div className="relative max-w-fit">
              <Image
                className="rounded-xl aspect-square"
                src={logo}
                alt=""
                width={40}
                height={40}
              />
              <button
                type="submit"
                className="text-red-500 hover:text-red-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                onClick={handleDelete}
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
            </div>
          )}

          <input
            onChange={handlePick}
            type="file"
            multiple
            name="logo"
            id="logo"
            className="hidden"
          />
          <label
            htmlFor="logo"
            className="cursor-pointer hover:bg-gray-100 block w-fit border me-4 py-3 px-4 bg-gray-50 rounded-3xl"
          >
            Добавить файл в логотип
          </label>
        </div>
      </>
    </div>
  );
};
