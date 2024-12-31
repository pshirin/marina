"use server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export const getIsAuth = async (request?: NextRequest) => {
  const c = request?.cookies ?? (await cookies());
  const token = c.get("token")?.value;
  if (!token) {
    return false;
  }
  const bdToken = await prisma.admin.findFirst({
    where: {
      token,
    },
  });
  return token === bdToken?.token;
};
