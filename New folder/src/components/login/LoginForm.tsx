"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function LoginForm() {
  const [error, setError] = useState("");
  const { replace } = useRouter();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      location.replace("/");
    }
  }, []);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError(
        "Wrong auth , please sure to the email and password and try again ! "
      );
      console.log(res?.error);
    } else {
      setError("");
      console.log("Success");
      replace("/client/car-wash-list");
    }
  };

  return (
    <form onSubmit={handleLogin} className="w-full p-4 mt-[30px] ">
      {error.length > 0 && (
        <p dir="ltr" className="text-red-700 mb-4 font-bold">
          {error}
        </p>
      )}
      <div className="flex flex-col  items-start w-full mb-3">
        <label htmlFor="email" className="font-bold ">
          البريد الالكتروني :
        </label>
        <input
          required
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
          required
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
