"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "@/firebase";

export default function ProfileForm() {
  const [file, setFile] = useState<any>(null);

  const [img, setImg] = useState<string | "">("");

  useEffect(() => {
    if (file !== null) {
      const fileName = new Date().getTime() + file?.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log("IMG Erorr ");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImg(downloadURL);
          });
        }
      );
    }
  }, [file]);
  console.log(img);

  return (
    <form action="" className="w-full mt-[30px] ">
      <div className="flex items-center md:items-start gap-4 flex-col md:flex-row mb-4 ">
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          <label htmlFor="firstName" className="font-bold ">
            الاسم الاول :*
          </label>
          <input
            required
            type="text"
            name=""
            id="firstName"
            placeholder="اسمك الاول"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          <label htmlFor="lastName" className="font-bold ">
            اسم العائلة :*
          </label>
          <input
            required
            type="text"
            name=""
            id="lastName"
            placeholder="اسمك الاخير"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
      </div>
      <div className="flex items-center md:items-start gap-4 flex-col md:flex-row mb-4 ">
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          <label htmlFor="firstName" className="font-bold ">
            رقم الهاتف :*
          </label>
          <input
            required
            type="number"
            name=""
            id="firstName"
            placeholder="065464"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          <label htmlFor="lastName" className="font-bold ">
            كلمة المرور :*
          </label>
          <input
            required
            type="password"
            name=""
            id="lastName"
            placeholder=""
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          <label htmlFor="lastName" className="font-bold ">
            البريد الالكتروني :*
          </label>
          <input
            required
            disabled
            readOnly
            type="text"
            name=""
            id="lastName"
            value="HossamYehia@gmail.com"
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 disabled:bg-gray-300 dark:disabled:bg-gray-700 "
          />
        </div>
      </div>
      <div className="flex items-center md:items-start gap-4 flex-col md:flex-row mb-4 ">
        <div className="flex flex-col items-start w-[500px] mx-auto ">
          <label htmlFor="lastName" className="font-bold  mb-3">
            الصورة:
          </label>
          <input
            className="block w-full text-sm p-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="large_size"
            type="file"
            multiple
            onChange={(e: any) => setFile(e.target.files[0])}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mb-4 ">
        <button className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 ">
          Update
        </button>
        <Link
          href="/login"
          className="  block hover:bg-red-700 border-[1px] duration-300 rounded-lg text-white text-lg bg-red-500 border-red-700 hover:border-white  dark:hover:bg-transparent py-2 px-3 "
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
