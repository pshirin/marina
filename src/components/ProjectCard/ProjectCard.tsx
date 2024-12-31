import React, { Suspense } from "react";

import type { Poster, Project, Logo } from "@prisma/client";
import Image from "next/image";
import { DeleteProjectButton } from "../DeleteProjectButton";
import Link from "next/link";
import { Slider } from "../Slider";

export const ProjectCard = ({
  id,
  description,
  posters,
  logo,
  name,
}: Project & { posters: Poster[]; logo: Logo | null }) => {
  return (
    <div className="flex flex-col gap-6 relative">
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

      <div className="flex gap-4 flex-col max-w-full break-words pl-6 pr-6">
        <div className="text-xl font-medium gap-4 flex items-center max-w-full justify-between">
          <div className="gap-4 flex items-center max-w-full justify-between">
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
            <div className="font-bold text-2xl overflow-auto">{name}</div>
          </div>
        </div>
        <p className="text-left text-gray-400 text-xl whitespace-normal break-words">
          {description}
        </p>

        <div className="flex gap-4">
          <Link
            href={`/project/${id}`}
            className="hover:bg-pink-600 mt-4 px-4 py-2 text-base font-bold bg-pink-500 text-white rounded-full flex items-center gap-2 max-w-fit"
          >
            <div>Почитать Case study</div>
          </Link>
          <Link
            href={""}
            target="_blank"
            className="mt-4 px-4 py-2  text-base border border-gray-300 hover:border-pink-500  text-black hover:text-pink-400 rounded-full flex items-center gap-2"
          >
            <div> Посмотреть в проде</div>
          </Link>
        </div>
      </div>
      <DeleteProjectButton projectId={id} />
    </div>
  );
};