"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Footer() {
  const [arOrEn, setArOrEn] = useState<string>("ar");

  useEffect(() => {
    localStorage.setItem("lang", arOrEn);
  }, [arOrEn]);

  const changeLang = () => {
    arOrEn === "ar" ? setArOrEn("en") : setArOrEn("ar");
  };

  return (
    <div className=" bg-slate-100 px-4 py-[50px] dark:bg-slate-900 text-center relative">
      <Button
        onClick={changeLang}
        className=" absolute top-0 w-fit left-0 z-50"
      >
        Ar/En
      </Button>
      {arOrEn === "ar" ? (
        <div className=" flex items-center md:items-start justify-between mx-auto flex-col md:flex-row">
          <div className="flex flex-col gap-3 border-b-[1px] border-slate-300 w-full py-3 my-3 md:m-0 md:p-0 md:border-none ">
            <h1 className="font-bold text-2xl ">مواعيد العمل </h1>
            <div className="flex flex-col gap-1">
              <span className="  text-sm text-gray-500 font-semibold">
                السبت - الخميس
              </span>
              <span className=" font-medium text-xl">
                من 4 مساءا الي 12 صباحا
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-b-[1px] border-slate-300 w-full py-3 my-3 md:m-0 md:p-0 md:border-none">
            <h1 className="font-bold text-2xl text-center ">
              النشرة الاخبارية{" "}
            </h1>
            <ul className="flex flex-col gap-1">
              <li className="text-xl text-gray-500 font-semibold">
                - اشترك في نشرتنا الاخبارية
              </li>

              <li className="text-xl text-gray-500 font-semibold">
                - احصل علي احدث الخصومات
              </li>
              <li className="text-xl text-gray-500 font-semibold">
                - كل شيء اسبوعيا
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 border-b-[1px]   mt-3 md:m-0 ">
            <h1 className="font-bold text-2xl text-center whitespace-nowrap ">
              تواصل معنا عبر الفيسبوك
            </h1>
            <Link
              target="_blanck"
              href="https://www.facebook.com/profile.php?id=61553926063909&mibextid=ZbWKwL"
              className=""
            >
              <Facebook className="text-white font-bold text-2xl flex items-center gap-4 justify-center border-[1px]    bg-sky-700   p-2  w-[50px] h-[40px] rounded-sm mx-auto transition-all duration-300 hover:bg-sky-600 " />
            </Link>
          </div>
        </div>
      ) : (
        <div className=" flex items-center md:items-start justify-between mx-auto flex-col md:flex-row">
          <div className="flex flex-col gap-3 border-b-[1px] border-slate-300 w-full py-3 my-3 md:m-0 md:p-0 md:border-none ">
            <h1 className="font-bold text-2xl ">Times of work </h1>
            <div className="flex flex-col gap-1">
              <span className="  text-sm text-gray-500 font-semibold">
                Saturday - Thursday
              </span>
              <span className=" font-medium text-xl">4 pm to 10 am</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-b-[1px] border-slate-300 w-full py-3 my-3 md:m-0 md:p-0 md:border-none">
            <h1 className="font-bold text-2xl text-center ">The news </h1>
            <ul className="flex flex-col gap-1">
              <li className="text-xl text-gray-500 font-semibold">
                - Subscribe to our newsletter
              </li>

              <li className="text-xl text-gray-500 font-semibold">
                - Get the latest discounts
              </li>
              <li className="text-xl text-gray-500 font-semibold">
                - Everything weekly
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 border-b-[1px]   mt-3 md:m-0 ">
            <h1 className="font-bold text-2xl text-center whitespace-nowrap ">
              Contact us via Facebook{" "}
            </h1>
            <Link
              target="_blanck"
              href="https://www.facebook.com/profile.php?id=61553926063909&mibextid=ZbWKwL"
              className=""
            >
              <Facebook className="text-white font-bold text-2xl flex items-center gap-4 justify-center border-[1px]    bg-sky-700   p-2  w-[50px] h-[40px] rounded-sm mx-auto transition-all duration-300 hover:bg-sky-600 " />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
