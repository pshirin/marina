"use server";
import { CreateProjectModalForm } from "@/components";
import { ReactNode } from "react";

type ModalTypes = "create";

interface Props {
  searchParams: Promise<{ modal: ModalTypes }>;
}

const modals: Record<ModalTypes, ReactNode> = {
  create: <CreateProjectModalForm />,
};

export default async function Modals(props: Props) {
  const searchParams = await props.searchParams;
  const modal = modals[searchParams.modal];
  return modal;
}
