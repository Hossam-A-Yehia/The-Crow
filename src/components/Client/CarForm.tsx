"use client";
import { addCar } from "@/actions";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CarForm() {
  const { data } = useSession() as any;

  return (
    <form action={addCar} className="w-full mt-[30px] ">
      <input type="hidden" name="userId" value={data?.user?._id} />
      <div className="flex items-center md:items-start gap-4 flex-col md:flex-row ">
        <div className="flex flex-col items w-full md:w-1/2 ">
          <label htmlFor="car_number" className="font-bold ">
            نمرة السيارة :*
          </label>
          <input
            type="text"
            name="car_number"
            id="car_number"
            placeholder="نمرة سيارتك"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          <label htmlFor="car_model" className="font-bold ">
            موديل السيارة :*
          </label>
          <input
            type="text"
            name="car_model"
            id="car_model"
            placeholder=" موديل سيارتك"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
      </div>
      <div className="flex items-center justify-between md:items-start gap-4 flex-col md:flex-row my-6 ">
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          <label htmlFor="car_color" className="font-bold ">
            لون السيارة :*
          </label>
          <input
            type="text"
            name="car_color"
            id="car_color"
            placeholder="لون سيارتك"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/2 mx-auto ">
          <label htmlFor="Car_Wash_Schedule_Days" className="font-bold mb-1 ">
            ايام غسيل السيارات :*
          </label>
          <select
            defaultValue="Mon-Thu"
            name="Car_Wash_Schedule_Days"
            id="Car_Wash_Schedule_Days"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="الاتنين والخميس">الاتنين والخميس</option>
            <option value="الاحد و الاربعاء">الاحد و الاربعاء</option>
            <option value="السبت والثلاثاء">السبت والثلاثاء</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-6 ">
        <button
          type="submit"
          className=" mb-[200px] md:mb-0  block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 "
        >
          اضافة سيارة
        </button>
        <Link
          href="/client/car-wisth-list"
          className=" mb-[200px] md:mb-0  block bg-red-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-red-700 hover:text-red-700 dark:hover:bg-transparent py-2 px-3 "
        >
          قائمة السيارات
        </Link>
      </div>
    </form>
  );
}
