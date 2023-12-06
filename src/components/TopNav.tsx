"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Image from "next/image";
function TopNav() {
  const user = true;
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className=" flex  flex-col  relative max-h-[74px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" height={80} width={80} />
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link href="/" className=" ">
                <Avatar className="transition-all duration-300 flex items-center justify-center cursor-pointer ">
                  <AvatarImage
                    className="rounded-full w-10 h-10"
                    src="/avatar_1.png"
                    alt="HY"
                  />
                  <AvatarFallback>HY</AvatarFallback>
                </Avatar>
              </Link>
              <Button className="  bg-sky-700 border-[1px] rounded-full text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent ">
                تسجيل خروج
              </Button>
            </>
          ) : (
            <Button className=" bg-sky-700 border-[1px] rounded-full text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent">
              تسجيل دخول
            </Button>
          )}

          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
export default TopNav;
