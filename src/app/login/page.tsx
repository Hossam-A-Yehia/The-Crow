import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col p-2w-[400px]  md:w-[500px]   mx-auto text-center items-center justify-center">
      <Link href={"/"}>
        <Image src="/logo.png" alt="Login" width={250} height={250} />
      </Link>
      <form action="" className="w-full mt-[30px] ">
        <div className="flex flex-col  items-start w-full mb-3">
          <label htmlFor="email" className="font-bold ">
            البريد الالكتروني :
          </label>
          <input
            type="email"
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
            type="password"
            name="password"
            id="password"
            placeholder="ادخل كلمة المرور..."
            className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <button className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 ">
            تسجيل دخول
          </button>
          <Link
            href="/register"
            className="  block bg-sky-700 border-[1px] duration-300 rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 "
          >
            انشاء حساب
          </Link>
        </div>
        <Link href="" className="font-bold text-lg">
          نسيت كلمة المرور ؟
        </Link>
      </form>
    </div>
  );
}
export default page;
