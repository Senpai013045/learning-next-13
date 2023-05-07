"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./Button";
import Link from "next/link";
import Image from "next/image";

export const SignOutButton = () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};

export const SignInButton = () => {
  const { status, data } = useSession();

  if (status === "loading") {
    return <Button disabled>loading...</Button>;
  }

  if (status === "authenticated") {
    return (
      <div className="flex gap-x-4 items-center">
        <Link href="/">
          <div className="bg-gray-200 flex gap-x-2 items-center px-2 py-1 rounded">
            {data?.user?.image && (
              <Image
                src={data.user.image}
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
                alt="user profile image"
                title={data?.user?.name || "anonymous"}
              />
            )}
            <span>{data?.user?.name || "anonymous"}</span>
          </div>
        </Link>
        <SignOutButton />
      </div>
    );
  }

  return <Button onClick={() => signIn()}>Sign In</Button>;
};
