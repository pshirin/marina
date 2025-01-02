"use server";
import { getIsAuth } from "@/utils";
import Link from "next/link";

export const CreateProjectButton = async () => {
  const isAuth = await getIsAuth();
  if (!isAuth) {
    return null;
  }
  return (
    <Link
      href="/?modal=create"
      scroll={false}
      className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-full fixed bottom-4 right-4 z-10"
    >
      Добавить
    </Link>
  );
};
