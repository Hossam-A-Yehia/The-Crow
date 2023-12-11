"use client";
import {
  FAILURELOGIN,
  STARTLOGING,
  SUCCESSLOGIN,
} from "@/app/store/features/auth";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { URL } from "@/app/url";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function LoginForm() {
  const { push } = useRouter();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      location.replace("/");
    }
  }, []);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(STARTLOGING());
    try {
      const res = await fetch(`${URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      const newData = {
        access_token: data.access_token,
        email: data.user.email,
        first_name: data.user.first_name,
        last_name: data.user.last_name,
        number: data.user.number,
      };
      dispatch(SUCCESSLOGIN(newData as any));
      console.log(data);

      push("/client/car-wisth-list");
    } catch (err: any) {
      console.log(err);
      dispatch(FAILURELOGIN());
    }
  };

  return (
    <form onSubmit={handleLogin} className="w-full p-4 mt-[30px] ">
      {/* <input type=" hidden" name="dispatch" value={dispatch} id="" /> */}
      <div className="flex flex-col  items-start w-full mb-3">
        <label htmlFor="email" className="font-bold ">
          البريد الالكتروني :
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          id="email"
          placeholder="ادخل بريدك الالكتروني..."
          className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
        />
      </div>
      <div className="flex flex-col  items-start w-full mb-5">
        <label htmlFor="password" className="font-bold ">
          كلمة المرور :
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="ادخل كلمة المرور..."
          className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200"
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <button
          type="submit"
          className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 "
        >
          تسجيل دخول
        </button>
        <Link
          href="/register"
          className="  block bg-sky-700 border-[1px] duration-300 rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 "
        >
          انشاء حساب
        </Link>
      </div>
      <Link
        href="/auth/forgetPassword"
        className=" duration-300 font-bold text-lg hover:text-sky-700"
      >
        نسيت كلمة المرور ؟
      </Link>
    </form>
  );
}
export default LoginForm;
