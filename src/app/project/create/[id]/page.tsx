interface Props {
  params: Promise<{
    id: string;
  }>;
}

import { BlockNoteProjectEditor } from "@/containers";
import prisma from "@/lib/prisma";
import { getIsAuth } from "@/utils";
import { redirect } from "next/navigation";

export default async function App({ params }: Props) {
  const isAuth = await getIsAuth();

  if (!isAuth) {
    return redirect("/admin");
  }
  const id = Number((await params).id);
  const data = await prisma.project.findUnique({
    where: {
      id,
    },
    include: {
      logo: true,
      posters: true,
    },
  });

  return <BlockNoteProjectEditor data={data?.content ?? ""} />;
}
