"use client";
import { Link, UserCircle } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle";
import { useAppDispatch } from "@/app/store/hooks";
import { LOGOUT } from "@/app/store/features/auth";
import { redirect, useRouter } from "next/navigation";

function NavClient() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const name =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") as any).name || null
      : null;

  const logout = () => {
    router.push("/");
    setTimeout(() => {
      dispatch(LOGOUT());
    }, 1000);
  };

  return (
    <div
      className="bg-sky-700 p-4 max-h-[80px] flex justify-between items-center "
      dir="ltr"
    >
      <div className="flex items-center gap-3">
        <UserCircle size={50} color="gray" className="bg-white rounded-full" />
        <div className="flex flex-col gap-1 text-white text-lg font-semibold">
          <span>{name}</span>
          <span>Client</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />

        <Button
          onClick={() => logout()}
          className="bg-white px-9 font-semibold  rounded-full text-slate-900 text-lg hover:bg-sky-700 border-[1px] hover:text-white  hover:border-white  dark:hover:bg-transparent  dark:hover:border-[1px]  dark:hover:border-white w-fit"
        >
          تسجيل خروج
        </Button>
      </div>
    </div>
  );
}
export default NavClient;
