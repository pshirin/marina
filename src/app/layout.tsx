import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { ActiveLink } from "@/components";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Портфолио Марины Овчинниковой",
};

export default function RootLayout({
  children,
  modals,
}: Readonly<{
  children: React.ReactNode;
  modals: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased flex max-lg:flex-col`}>
        <header className=" w-32 min-h-screen max-h-screen max-lg:min-h-24 max-lg:min-w-full z-1 fixed max-xl:static top-0 p-4 flex flex-col max-lg:flex-row justify-between">
          <div className="flex gap-14">
            <div className="flex flex-col gap-14 max-lg:flex-row">
              <Link href="/" className="flex gap-3 flex-col">
                <Image
                  className="rounded-2xl"
                  alt="аватар"
                  width={90}
                  height={90}
                  priority
                  src="https://res.cloudinary.com/dhe8a7elv/image/upload/v1735572843/samples/woman-on-a-football-field.jpg"
                />
                <div>
                  <div className="font-bold text-xl">Овчинникова</div>
                  <div className="font-bold text-xl">Марина</div>
                </div>
              </Link>
              <div>
                <div className="font-bold text-xl hover:underline cursor-pointer">
                  Резюме
                </div>
                <div className="font-bold text-xl hover:underline cursor-pointer">
                  Telegram
                </div>
                <div className="text-xl font-bold  hover:underline cursor-pointer">
                  Email
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <ActiveLink
              index
              className="shadow-md transition duration-200 p-2 rounded-3xl cursor-pointer text-center"
              href={"/"}
            >
              Работы
            </ActiveLink>
            <ActiveLink
              className="shadow-md transition duration-200 p-2 rounded-3xl cursor-pointer text-center"
              href={"/about"}
            >
              Обо мне
            </ActiveLink>
          </div>
        </header>
        <main className="m-auto max-w-4xl w-full pt-4 pb-4">{children}</main>
        {modals}
        <Link
          href=""
          className=" mt-4 pr-5 pl-2 py-2 font-bold text-white rounded-full top-4 right-4 z-10 fixed flex justify-center items-center gap-2 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 animate-gradient hover:scale-105 transition duration-75"
        >
          <svg
            className=""
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 496 512"
            height="24px"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
          </svg>
          <div>Написать в тг</div>
        </Link>
      </body>
    </html>
  );
}
