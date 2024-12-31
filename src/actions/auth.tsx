"use server";
import prisma from "@/lib/prisma";
import { assert, generateToken } from "@/utils";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function login(formData: FormData) {
  const login = formData.get("login");
  const password = formData.get("password");
  assert(login && typeof login === "string", "login is required");
  assert(password && typeof password === "string", "password is required");

  const admin = await prisma.admin.findFirst({
    where: {
      name: login,
    },
  });

  assert(admin, "wrong login or password");
  const isPasswordValid = password === admin.password;
  assert(isPasswordValid, "wrong login or password");
  const token = await generateToken();

  await prisma.admin.update({
    where: {
      id: admin.id,
    },
    data: {
      token,
    },
  });

  const c = await cookies();
  c.set("token", token);

  redirect("/");
}
