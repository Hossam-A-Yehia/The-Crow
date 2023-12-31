"use client";
import { URL } from "@/app/url";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

function ResetPasswordForm() {
  const [error, setError] = useState("");

  const [password, setPassword] = useState("");
  const { push } = useRouter();

  const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (password.length > 5) {
        const res = await fetch(`${URL}/api/auth/change-password`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        });
        const data = await res.json();
        console.log(data);
        push("/");
        toast.success("A new password has been created, please login again");
      } else {
        setError("كلمة المرور يجب ان تكون اكبر من 6");
      }
    } catch (err: any) {
      console.log(err);
      setError("كلمة المرور يجب ان تكون اكبر من 6");
    }
  };

  return (
    <form onSubmit={resetPassword} className="w-full mt-[30px] ">
      {error.length > 0 && (
        <p className="text-red-700 mb-4 font-bold">{error}</p>
      )}
      <div className="flex flex-col  items-start w-full mb-3">
        <label htmlFor="password" className="font-bold ">
          كلمة المرور الجديدة :
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
        />
      </div>

      <div className="flex items-center mt-4 justify-end">
        <button
          type="submit"
          className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 "
        >
          متابعة
        </button>
      </div>
    </form>
  );
}
export default ResetPasswordForm;
