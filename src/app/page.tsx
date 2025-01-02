import { CreateProjectButton, ProjectCard } from "@/components";
import prisma from "@/lib/prisma";

import { Suspense } from "react";

export const experimental_ppr = true;

export default async function Home() {
  const projects = await prisma.project.findMany({
    include: {
      posters: true,
      logo: true,
    },
  });

  return (
    <div className="flex flex-col gap-14">
      {projects.map((e) => (
        <ProjectCard key={e.id} {...e} />
      ))}
      <Suspense>
        <CreateProjectButton />
      </Suspense>
    </div>
  );
}
