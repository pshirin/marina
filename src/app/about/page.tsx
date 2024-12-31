import { BlockNoteEditor, EditProjectButton } from "@/components";
import { getIsAuth } from "@/utils";
import prisma from "@/lib/prisma";
export default async function Page() {
  const data = await prisma.about.findFirst();
  const isAuth = await getIsAuth();
  return (
    <>
      {data && <BlockNoteEditor editable={false} data={data} />}
      {isAuth && <EditProjectButton href={`/about/edit`} />}
    </>
  );
}
