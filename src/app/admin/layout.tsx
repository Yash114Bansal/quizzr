import SessionProvider from "@/components/SessionProvider";
import { signIn } from "next-auth/react";
import ReduxProvider from "@/state/ReduxProvider";
import ClientImage from "@/components/ClientImage";
import { ToastContainer } from "react-toastify";
import type { Metadata } from "next";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/auth";
import Link from "next/link";

export const metadata : Metadata = {
  title: "quizzr Admin",
  description: "quizzr Admin Panel",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  if(!session||!session.user){
    signIn("google", { callbackUrl: "/admin" });
  }
  return (
      <>
        <SessionProvider>
          <ReduxProvider>
            <div className="flex flex-col w-[100vw]">
                <div className="p-2 px-4 md:px-8 bg-light-bg dark:bg-dark-bg hidden md:block">
                  <Link href="/">
                  <ClientImage
                      props={{
                          src: "/logo.svg",
                          darksrc: "/logo-dark.svg",
                          alt: "quizzr Logo",
                          width: 80,
                          height: 80
                      }}
                  />
                  </Link>
                </div>
            {children}
            <ToastContainer />
            </div>
          </ReduxProvider>
        </SessionProvider>
      </>
  );
}
