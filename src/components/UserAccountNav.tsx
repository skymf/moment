"use client";

import { User } from "@/payload-types";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/hooks/use-auth";

const UserAccountNav = ({ user }: { user: User }) => {
  const { signOut } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <button className="relative">
          <Image
            src="/hey.jpg"
            width={40}
            height={40}
            alt="your profile picture"
            className="rounded-full "
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white w-60" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            <p className="font-medium text-sm text-black">{user.email}</p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/sell">head over to your selling dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={signOut}
          className="cursor-pointer font-semibold text-red-500 hover:text-red-700"
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
