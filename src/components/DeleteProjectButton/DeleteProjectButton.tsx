import { deleteProject } from "@/actions/crud";
import { getIsAuth } from "@/utils";

interface Props {
  projectId: number;
}
export const DeleteProjectButton = async ({ projectId }: Props) => {
  const isAuth = await getIsAuth();
  if (!isAuth) return null;
  return (
    <form action={deleteProject} className="absolute top-3 right-6 z-10">
      <input type="hidden" name="id" value={projectId} />
      <button type="submit" className="text-red-500 hover:text-red-600">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
        </svg>
      </button>
    </form>
  );
};
