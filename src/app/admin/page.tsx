import { login } from "@/actions/auth";

export default async function Page() {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action={login}>
        <div>
          <label
            htmlFor="login"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Логин
          </label>
          <div className="mt-2">
            <input
              autoComplete="new-login"
              id="login"
              name="login"
              required
              className="rounded-3xl block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-200 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Пароль
            </label>
          </div>
          <div className="mt-2">
            <input
              autoComplete="new-password"
              id="password"
              name="password"
              type="password"
              required
              className="rounded-3xl block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-200 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="rounded-3xl text-center flex w-full justify-center  bg-pink-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}
