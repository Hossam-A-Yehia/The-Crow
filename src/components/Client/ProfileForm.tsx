"use client";
import { updateProfile } from "@/actions";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ProfileForm() {
  const { data } = useSession() as any;

  const [first_name, setFirst_name] = useState<string>(data?.user?.first_name);
  const [last_name, setLast_name] = useState<string>(data?.user?.last_name);
  const [email, setEmail] = useState<string>(data?.user?.email);
  const [number, setNumber] = useState<number>(data?.user?.number);

  return (
    <form action={updateProfile} className="w-full mt-[30px] p-4">
      <input type="hidden" name="id" value={data?.user?._id} />
      <div className="flex item-center md:items-start gap-4 flex-col md:flex-row mb-4 ">
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          <label htmlFor="firstName" className="font-bold ">
            الاسم الاول :*
          </label>
          <input
            onChange={(e) => setFirst_name(e.target.value)}
            type="text"
            id="firstName"
            name="first_name"
            value={first_name}
            placeholder=" اسمك الاول "
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          <label htmlFor="firstName" className="font-bold ">
            اسم العائلة :*
          </label>
          <input
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            type="text"
            id="firstName"
            name="last_name"
            placeholder="اسم عائلتك "
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
      </div>
      <div className="flex items-center md:items-start gap-4 flex-col md:flex-row mb-4 ">
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          <label htmlFor="phone" className="font-bold ">
            رقم الهاتف :*
          </label>
          <input
            onChange={(e) => setNumber(e.target.value as any)}
            value={number}
            name="number"
            type="number"
            id="phone"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          <label htmlFor="email" className="font-bold ">
            البريد الالكتروني :*
          </label>
          <input
            onChange={(e) => setEmail(e.target.value as any)}
            value={email}
            type="email"
            name="email"
            id="email"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200  "
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mb-4 ">
        <button className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 ">
          تعديل
        </button>

        <Link
          href="/"
          className="  block hover:bg-red-700 border-[1px] duration-300 rounded-lg text-white text-lg bg-red-500 border-red-700 hover:border-white  dark:hover:bg-transparent py-2 px-3 "
        >
          رجوع
        </Link>
      </div>
    </form>
  );
}
