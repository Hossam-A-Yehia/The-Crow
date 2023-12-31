"use client";
import { UserCircle } from "lucide-react";

import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle";
import { signOut, useSession } from "next-auth/react";

function NavClient() {
  const { data } = useSession() as any;

  const logout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div
      className="bg-sky-700 p-4 max-h-[80px] flex justify-between items-center "
      dir="ltr"
    >
      <div className="flex items-center gap-3">
        <UserCircle
          size={50}
          color="gray"
          className="bg-white rounded-full hidden md:block"
        />
        <div className="flex flex-col gap-1 text-white text-lg font-semibold">
          <span>{`${data?.user?.first_name}  ${data?.user?.last_name}`}</span>
          <span>عميل</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />

        <Button
          onClick={(e) => logout()}
          className="bg-white px-9 font-semibold  rounded-full text-slate-900 text-lg hover:bg-sky-700 border-[1px] hover:text-white  hover:border-white  dark:hover:bg-transparent  dark:hover:border-[1px]  dark:hover:border-white w-fit"
        >
          تسجيل خروج
        </Button>
      </div>
    </div>
  );
}
export default NavClient;
