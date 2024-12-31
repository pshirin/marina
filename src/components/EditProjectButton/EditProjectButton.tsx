"use server";

import { getIsAuth } from "@/utils";
import Link from "next/link";

export const EditProjectButton = async ({ href }: { href: string }) => {
  const isAuth = await getIsAuth();

  return (
    isAuth && (
      <Link
        href={href}
        className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-full fixed bottom-4 right-4 z-1"
      >
        Редактировать
      </Link>
    )
  );
};
