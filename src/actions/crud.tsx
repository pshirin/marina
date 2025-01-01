"use server";
import cloudinary from "@/lib/cloudinary";
import { assert } from "@/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const MAX_PER_SLIDER = 10;

export async function createProject(formData: FormData) {
  const name = formData.get("name");
  const description = formData.get("description");
  const posters = [];
  for (let i = 0; i < MAX_PER_SLIDER; i++) {
    const poster = formData.get(`poster-${i}`);
    if (!poster) break;
    posters.push(poster);
  }

  const logo = formData.get("logo");
  // const prodUrl = formData.get("prodUrl");
  // const tags = formData.getAll("tags");

  assert(typeof name === "string", "title is required");
  assert(typeof description === "string", "description is required");
  assert(posters.length, "poster is required");
  assert(logo instanceof File && logo.size, "logo is required");

  const cloudinaryClient = await cloudinary();
  const uploadPromises = posters.map((file) =>
    cloudinaryClient.upload(file as File)
  );
  const responses = await Promise.all(uploadPromises);
  const results = await Promise.all(responses.map((res) => res.json()));
  const postersUrls = results.map((result) => result.url);

  const logoCloudinary = await (await (await cloudinary()).upload(logo)).json();
  const { id: posterId } = await prisma.poster.create({
    data: {
      url: JSON.stringify(postersUrls),
    },
  });

  const { id: logoId } = await prisma.logo.create({
    data: {
      url: logoCloudinary.url,
    },
  });

  await prisma.project.create({
    data: {
      name,
      description,
      published: false,
      ...(posterId ? { posters: { connect: { id: posterId } } } : {}),
      ...(logoId ? { logo: { connect: { id: logoId } } } : {}),
    },
  });
  redirect("/");
}

export async function deleteProject(formData: FormData) {
  const id = Number(formData.get("id"));
  assert(id && !isNaN(id), "id is required");
  await prisma.project.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
}

export async function updateProjectContent(formData: FormData) {
  const id = Number(formData.get("projectId"));
  const content = formData.get("content");
  assert(id && !isNaN(id), "id is projectId");
  assert(!content || typeof content === "string", "content is required");

  try {
    await prisma.project.update({
      where: {
        id,
      },
      data: {
        content,
      },
    });
    revalidatePath(`/project/${id}`);
  } catch (error) {
    console.log({ error });
  }
}

export async function updateAboutContent(formData: FormData) {
  const content = formData.get("content");
  assert(content && typeof content === "string", "content is required");
  try {
    const about = await prisma.about.findFirst({ select: { id: true } });
    if (!about?.id) {
      await prisma.about.create({
        data: {
          content,
        },
      });
    } else {
      await prisma.about.update({
        where: { id: about?.id },
        data: {
          content,
        },
      });
    }

    revalidatePath("/about");
  } catch (error) {
    console.log({ error });
  }
}
