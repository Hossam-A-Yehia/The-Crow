"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Image from "next/image";
import { useAppDispatch } from "@/app/store/hooks";
import { LOGOUT } from "@/app/store/features/auth";
import { signOut, useSession } from "next-auth/react";
function TopNav() {
  const dispatch = useAppDispatch();
  const session = useSession();
  console.log(session);

  const logout = () => {
    signOut();
  };

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") as any)
      : null;

  return (
    <div className=" flex  flex-col   max-h-[74px]  ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" height={80} width={80} />
        </div>

        <div className="flex items-center gap-3">
          {session.status === "authenticated" ? (
            <>
              <Link href="/client/car-wash-list" className=" ">
                <Avatar className="transition-all duration-300 flex items-center justify-center cursor-pointer ">
                  <AvatarImage
                    className="rounded-full w-10 h-10"
                    src="/avatar_1.png"
                    alt="HY"
                  />
                  <AvatarFallback>HY</AvatarFallback>
                </Avatar>
              </Link>
              <Button
                onClick={logout}
                className="  bg-sky-700 border-[1px] rounded-full text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent "
              >
                تسجيل خروج
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button className=" bg-sky-700 border-[1px] rounded-full text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent">
                تسجيل دخول
              </Button>
            </Link>
          )}

          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
export default TopNav;
