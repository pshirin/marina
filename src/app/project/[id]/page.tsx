interface Props {
  params: Promise<{
    id: string;
  }>;
}

import { BlockNoteEditor, EditProjectButton, Slider } from "@/components";
import prisma from "@/lib/prisma";
import Image from "next/image";
import { Suspense } from "react";

export default async function App({ params }: Props) {
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
  if (!data) return <div>project not found</div>;
  const { name, description, posters, logo } = data;
  return (
    <>
      <div className="flex flex-col gap-6 relative">
        <div className="flex gap-4 flex-col max-w-full break-words pl-6 pr-6">
          <div className="text-xl font-medium gap-4 flex items-center max-w-full">
            {logo && (
              <Image
                className="rounded-xl aspect-square"
                key={logo.id}
                src={logo.url}
                width={40}
                height={40}
                alt="logo"
                priority
              />
            )}
            <div className="font-medium overflow-auto">{name}</div>
          </div>
          <p className="text-left text-gray-500 whitespace-normal break-words ">
            {description}
          </p>
        </div>

        <div aria-label="slider">
          {posters.map((poster, i) => {
            if (!poster.url) return;
            const imgs = JSON.parse(poster.url);
            return (
              <Suspense key={i}>
                <Slider imgs={imgs} autoplay={{ delay: 3000 }} />
              </Suspense>
            );
          })}
        </div>
      </div>
      <BlockNoteEditor data={data} editable={false} />
      <Suspense>
        <EditProjectButton href={`/project/create/${id}`} />
      </Suspense>
    </>
  );
}
