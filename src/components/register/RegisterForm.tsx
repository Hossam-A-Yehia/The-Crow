"use client";
import { URL } from "@/app/url";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { electron } from "webpack";

function RegisterForm() {
  const [user, setUser] = useState({});
  const { push } = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`${URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log(data);
      push("/login");
    } catch (err: any) {
      console.log(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { name } = e.target;

    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };


  return (
    <form onSubmit={handleRegister} className="w-full p-4 mt-[30px] ">
      <div className="flex  items-center md:items-start gap-4 flex-col md:flex-row ">
        <div className="flex flex-col items-start w-full md:w-1/4 ">
          <label htmlFor="lastName" className="font-bold ">
            الاسم الاول :*
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="first_name"
            id="lastName"
            placeholder="First name "
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/4 ">
          <label htmlFor="last_name" className="font-bold ">
            اسم العائلة :*
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last name "
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/4 ">
          <label htmlFor="email" className="font-bold ">
            البريد الالكتروني :*
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder=" Email address"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/4 ">
          <label htmlFor="password" className="font-bold ">
            كلمة المرور :*
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200"
          />
        </div>
      </div>
      <div className="flex items-center md:items-start gap-4 flex-col md:flex-row my-6 ">
        <div className="flex flex-col items-start w-full md:w-1/4 ">
          <label htmlFor="phone" className="font-bold ">
            رقم الهاتف :*
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="number"
            id="phone"
            placeholder="Mobile number"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/4 ">
          <label htmlFor="zone" className="font-bold ">
            رقم الزون :*
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="zone_number"
            id="zone"
            placeholder="Zone number"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/4 ">
          <label htmlFor="number" className="font-bold ">
            رقم العمارة :*
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="building_number"
            id="number"
            placeholder="Building number"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200"
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/4 ">
          <label htmlFor="apartment " className="font-bold ">
            رقم الشقة :*
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="apartment_number"
            id="apartment"
            placeholder="Apartment Number"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
      </div>
      <div className="flex items-center md:items-start gap-4 flex-col md:flex-row my-6 ">
        <div className="flex flex-col items-start w-full md:w-1/4 ">
          <label htmlFor="carModel" className="font-bold ">
            نوع السيارة :*
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="car_model"
            id="carModel"
            placeholder="Car model"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/4 ">
          <label htmlFor="carColor" className="font-bold ">
            لون السيارة :*
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="car_color"
            id="carColor"
            placeholder="Car Color"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/4 ">
          <label htmlFor="number" className="font-bold ">
            رقم السيارة :*
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="car_number"
            id="number"
            placeholder="Car Plate information"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200"
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/4  ">
          <label htmlFor="firstName" className="font-bold mb-1 ">
            أيام جدول غسيل السيارات :*
          </label>
          <select
            defaultValue={"Mon-Thu"}
            onChange={handleChange as any}
            name="Car_Wash_Schedule_Days"
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Mon-Thu" hidden>
              Car wash schedule
            </option>
            <option value="Mon-Thu">الاثنين و الخميس</option>
            <option value="Sun-Wed">الأحد والأربعاء</option>
            <option value="Sat-Tue">السبت والثلاثاء</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col mb-4 ">
        <button
          type="submit"
          className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 "
        >
          انشاء حساب
        </button>
        <span className="my-1 font-bold text-lg tracking-widest">Or</span>
        <Link
          href="/login"
          className="  block hover:bg-sky-700 border-[1px] duration-300 rounded-lg hover:text-white text-lg bg-white border-sky-700 hover:border-white text-slate-700 dark:hover:bg-transparent py-2 px-3 "
        >
          تسجيل دخول
        </Link>
      </div>
      <span className="font-bold text-lg">
        ادفع اشتراكك الشهرى الان عن طريق انستا باى على رقم: ٠١٠٩٩٧١٥٥٥٦
      </span>
    </form>
  );
}
export default RegisterForm;
