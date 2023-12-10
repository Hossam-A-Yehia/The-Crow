"use client";
import { LOGOUT } from "@/app/store/features/auth";
import { useAppDispatch } from "@/app/store/hooks";
import { URL } from "@/app/url";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ProfileForm() {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const [first_name, setFirst_name] = useState(null);
  const [last_name, setLast_name] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [number, setNumber] = useState(null);

  const token =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") as any).access_token || null
      : null;

  const updateCar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`${URL}/api/auth/updateprofile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
          number,
        }),
      });
      // const data = await res.json();
      // console.log(data);
      push("/login");
      dispatch(LOGOUT());
      toast.info("Updated Done ");
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={updateCar} className="w-full mt-[30px] ">
      <div className="flex items-center md:items-start gap-4 flex-col md:flex-row mb-4 ">
        <div className="flex flex-col items-start w-full md:w-1/3 ">
          <label htmlFor="firstName" className="font-bold ">
            الاسم الاول :*
          </label>
          <input
            onChange={(e) => setFirst_name(e.target.value as any)}
            type="text"
            id="firstName"
            placeholder=" اسمك الاول "
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/3 ">
          <label htmlFor="firstName" className="font-bold ">
            اسم العائلة :*
          </label>
          <input
            onChange={(e) => setLast_name(e.target.value as any)}
            type="text"
            id="firstName"
            placeholder="اسم عائلتك "
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/3 ">
          <label htmlFor="phone" className="font-bold ">
            رقم الهاتف :*
          </label>
          <input
            onChange={(e) => setNumber(e.target.value as any)}
            type="text"
            id="phone"
            placeholder="065464"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
      </div>
      <div className="flex items-center md:items-start gap-4 flex-col md:flex-row mb-4 ">
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          <label htmlFor="password" className="font-bold ">
            كلمة المرور :*
          </label>
          <input
            onChange={(e) => setPassword(e.target.value as any)}
            type="password"
            name="password"
            id="password"
            placeholder=""
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          <label htmlFor="email" className="font-bold ">
            البريد الالكتروني :*
          </label>
          <input
            onChange={(e) => setEmail(e.target.value as any)}
            type="email"
            name="email"
            id="email"
            placeholder="EreYehia@gmail.com"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200  "
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mb-4 ">
        <button
          type="submit"
          className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 "
        >
          Update
        </button>
        <Link
          href="/"
          className="  block hover:bg-red-700 border-[1px] duration-300 rounded-lg text-white text-lg bg-red-500 border-red-700 hover:border-white  dark:hover:bg-transparent py-2 px-3 "
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
