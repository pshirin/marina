import { BlockNoteAboutEditor } from "@/containers";
import prisma from "@/lib/prisma";
import { getIsAuth } from "@/utils";
import { redirect } from "next/navigation";

export default async function Page() {
  const isAuth = await getIsAuth();
  if (!isAuth) return redirect("/admin");
  const data = await prisma.about.findFirst();
  return <BlockNoteAboutEditor data={data?.content ?? ""} />;
}
