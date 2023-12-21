"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
function Contact() {
  const [arOrEn, setArOrEn] = useState<string>("ar");

  useEffect(() => {
    localStorage.setItem("lang", arOrEn);
  }, [arOrEn]);

  const changeLang = () => {
    arOrEn === "ar" ? setArOrEn("en") : setArOrEn("ar");
  };

  return (
    <div className=" relative ">
      <Button
        onClick={changeLang}
        className=" absolute top-[-10px] w-fit left-0 z-50"
      >
        Ar/En
      </Button>
      {arOrEn === "ar" ? (
        <div className="  text-center my-[150px] ">
          <div className="flex flex-col gap-2 mb-[90px]">
            <span className="font-bold text-gray-500 ">اتصل بنا</span>
            <span className="font-bold text-3xl text-sky-700 tracking-wider">
              نحن هنا من أجلك
            </span>
          </div>{" "}
          <div className="flex items-center gap-[130px] justify-center mt-16 flex-col md:flex-row">
            <Image
              src="/contact.svg"
              width={350}
              height={350}
              className=" animate-wiggle h-[300px] w-[300px] md:h-[350px] md:w-[350px]"
              alt={""}
            />
            <form action="" className="flex flex-col gap-2 w-[300px] md:w-96">
              <input
                type="text"
                placeholder="اسمك"
                className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400 input input-bordered w-full rounded-xl mt-2 mb-1 transition-all duration-300 focus:mr-2 focus:outline-sky-600 border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200"
              />
              <input
                type="email"
                placeholder="البريد الالكتروني"
                className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400 input input-bordered w-full rounded-xl mt-2 mb-1 transition-all duration-300 focus:mr-2 focus:outline-sky-600 border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
              />
              <textarea
                className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400 input input-bordered w-full rounded-xl mt-2 mb-1 transition-all duration-300 focus:mr-2 focus:outline-sky-600 border-sky-500 border-[1px] h-[200px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200"
                placeholder="الرسالة"
              ></textarea>

              <button className=" transition-all duration-300 bg-sky-700 px-9 font-semibold  rounded-full text-white text-lg hover:bg-sky-800   dark:hover:bg-transparent  border-[1px]  dark:hover:border-white py-2">
                ارسال{" "}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="  text-center my-[150px] ">
          <div className="flex flex-col gap-2 mb-[90px]">
            <span className="font-bold text-gray-500 ">Contact Us</span>
            <span className="font-bold text-3xl text-sky-700 tracking-wider">
              We are here for you
            </span>
          </div>{" "}
          <div className="flex items-center gap-[130px] justify-center mt-16 flex-col md:flex-row">
            <Image
              src="/contact.svg"
              width={350}
              height={350}
              className=" animate-wiggle h-[300px] w-[300px] md:h-[350px] md:w-[350px] "
              alt={""}
            />
            <form action="" className="flex flex-col gap-2 w-[300px] md:w-96">
              <input
                type="text"
                placeholder="Name"
                className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400 input input-bordered w-full rounded-xl mt-2 mb-1 transition-all duration-300 focus:mr-2 focus:outline-sky-600 border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400 input input-bordered w-full rounded-xl mt-2 mb-1 transition-all duration-300 focus:mr-2 focus:outline-sky-600 border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
              />
              <textarea
                className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400 input input-bordered w-full rounded-xl mt-2 mb-1 transition-all duration-300 focus:mr-2 focus:outline-sky-600 border-sky-500 border-[1px] h-[200px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200"
                placeholder="Message"
              ></textarea>

              <button className=" transition-all duration-300 bg-sky-700 px-9 font-semibold  rounded-full text-white text-lg hover:bg-sky-800   dark:hover:bg-transparent  border-[1px]  dark:hover:border-white py-2">
                Send{" "}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
