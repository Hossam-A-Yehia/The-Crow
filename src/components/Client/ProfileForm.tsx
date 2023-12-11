"use client";
import { LOGOUT, SUCCESSLOGIN } from "@/app/store/features/auth";
import { useAppDispatch } from "@/app/store/hooks";
import { URL } from "@/app/url";
import { Edit } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type userInfo = {
  first_name: string;
  last_name: string;
  email: string;
  number: string;
};

export default function ProfileForm() {
  const [data, setData] = useState<any | {}>({});

  const [updated, setUpdated] = useState("");
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const token =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") as any).access_token || null
      : null;

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") as any) || null
      : null;

  console.log(data);

  const updateFirstName = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch(`${URL}/api/auth/updateFirstName`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          first_name,
        }),
      });
      const data = await res.json();
      console.log(data);
      toast.info("Updated Done ");
      const newData = {
        first_name,
        access_token: user.access_token,
        last_name: user.last_name,
        number: user.number,
      };
      localStorage.setItem("user", JSON.stringify(newData as any));
      location.reload();
    } catch (err: any) {
      console.log(err);
    }
  };
  const updateLastName = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`${URL}/api/auth/updateLastName`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          last_name,
        }),
      });
      // const data = await res.json();
      // console.log(data);
      toast.info("Updated Done ");
      const newData = {
        first_name: user.first_name,
        access_token: user.access_token,
        last_name,
        number: user.number,
      };
      localStorage.setItem("user", JSON.stringify(newData as any));
      location.reload();
    } catch (err: any) {
      console.log(err);
    }
  };
  const updateNumber = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`${URL}/api/auth/updateNumber`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          number,
        }),
      });
      const data = await res.json();
      console.log(data);
      toast.info("Updated Done ");
      const newData = {
        first_name: user.first_name,
        access_token: user.access_token,
        last_name: user.last_name,
        number,
      };
      localStorage.setItem("user", JSON.stringify(newData as any));
      location.reload();
    } catch (err: any) {
      console.log(err);
    }
  };
  const updateEmail = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`${URL}/api/auth/updateEmail`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email,
        }),
      });
      // const data = await res.json();
      // console.log(data);
      toast.info("Updated Done ");
      location.replace("/login");
      dispatch(LOGOUT());
    } catch (err: any) {
      console.log(err);
    }
  };
  const updatePassword = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`${URL}/api/auth/updatePassword`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          password,
        }),
      });
      // const data = await res.json();
      // console.log(data);
      toast.info("Updated Done ");
      location.replace("/login");
      dispatch(LOGOUT());
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    const FetchCars = async () => {
      try {
        const res = await fetch(`${URL}/api/auth/user-profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        setData(data);
      } catch (err: any) {
        console.log(err);
      }
    };
    FetchCars();
  }, []);

  return (
    <form className="w-full mt-[30px] ">
      <div className="flex items-center md:items-start gap-4 flex-col md:flex-row mb-4 ">
        <div className="flex flex-col items-start w-full md:w-1/3 ">
          {updated === "firstName" ? (
            <>
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
            </>
          ) : (
            <>
              <label htmlFor="firstName" className="font-bold ">
                الاسم الاول :*
              </label>
              <input
                onChange={(e) => setFirst_name(e.target.value as any)}
                type="text"
                readOnly
                id="firstName"
                value={data?.first_name}
                placeholder=" اسمك الاول "
                className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 read-only:bg-slate-200 read-only:border-none dark:read-only:bg-slate-700 read-only:focus:-translate-x-0"
              />
            </>
          )}
        </div>
        <Edit
          className="mt-9 cursor-pointer"
          onClick={() =>
            setUpdated((prev) => (prev === "firstName" ? "" : "firstName"))
          }
        />
        <div className="flex flex-col items-start w-full md:w-1/3 ">
          {updated === "lastName" ? (
            <>
              <label htmlFor="firstName" className="font-bold ">
                اسم العائلة :*
              </label>
              <input
                onChange={(e) => setLast_name(e.target.value as any)}
                type="text"
                id="firstName"
                placeholder="اسم عائلتك "
                className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 read-only:bg-slate-200 read-only:border-none dark:read-only:bg-slate-700 read-only:focus:-translate-x-0"
              />
            </>
          ) : (
            <>
              <label htmlFor="firstName" className="font-bold ">
                اسم العائلة :*
              </label>
              <input
                onChange={(e) => setLast_name(e.target.value as any)}
                type="text"
                readOnly
                value={data?.last_name}
                id="firstName"
                placeholder="اسم عائلتك "
                className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 read-only:bg-slate-200 read-only:border-none dark:read-only:bg-slate-700 read-only:focus:-translate-x-0"
              />
            </>
          )}
        </div>
        <Edit
          className="mt-9 cursor-pointer"
          onClick={() =>
            setUpdated((prev) => (prev === "lastName" ? "" : "lastName"))
          }
        />
        <div className="flex flex-col items-start w-full md:w-1/3 ">
          {updated === "number" ? (
            <>
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
            </>
          ) : (
            <>
              <label htmlFor="phone" className="font-bold ">
                رقم الهاتف :*
              </label>
              <input
                readOnly
                onChange={(e) => setNumber(e.target.value as any)}
                type="text"
                value={data?.number}
                id="phone"
                className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 read-only:bg-slate-200 read-only:border-none dark:read-only:bg-slate-700 read-only:focus:-translate-x-0 "
              />
            </>
          )}
        </div>
        <Edit
          className="mt-9 cursor-pointer"
          onClick={() =>
            setUpdated((prev) => (prev === "number" ? "" : "number"))
          }
        />
      </div>
      <div className="flex items-center md:items-start gap-4 flex-col md:flex-row mb-4 ">
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          {updated === "password" ? (
            <>
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
            </>
          ) : (
            <>
              <label htmlFor="password" className="font-bold ">
                كلمة المرور :*
              </label>
              <input
                readOnly
                onChange={(e) => setPassword(e.target.value as any)}
                type="password"
                name="password"
                id="password"
                placeholder=""
                className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 read-only:bg-slate-200 read-only:border-none dark:read-only:bg-slate-700 read-only:focus:-translate-x-0"
              />
            </>
          )}
        </div>
        <Edit
          className="mt-9 cursor-pointer"
          onClick={() =>
            setUpdated((prev) => (prev === "password" ? "" : "password"))
          }
        />
        <div className="flex flex-col items-start w-full md:w-1/2 ">
          {updated === "email" ? (
            <>
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
            </>
          ) : (
            <>
              <label htmlFor="email" className="font-bold ">
                البريد الالكتروني :*
              </label>
              <input
                value={data?.email}
                readOnly
                onChange={(e) => setEmail(e.target.value as any)}
                type="email"
                name="email"
                id="email"
                placeholder="EreYehia@gmail.com"
                className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200  read-only:bg-slate-200 read-only:border-none dark:read-only:bg-slate-700 read-only:focus:-translate-x-0"
              />
            </>
          )}
        </div>
        <Edit
          className="mt-9 cursor-pointer"
          onClick={() =>
            setUpdated((prev) => (prev === "email" ? "" : "email"))
          }
        />
      </div>

      <div className="flex items-center justify-center gap-3 mb-4 ">
        {updated === "firstName" && (
          <button
            onClick={(e) => updateFirstName(e)}
            className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 "
          >
            Update
          </button>
        )}
        {updated === "lastName" && (
          <button
            onClick={(e) => updateLastName(e)}
            className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 "
          >
            Update
          </button>
        )}
        {updated === "number" && (
          <button
            onClick={(e) => updateNumber(e)}
            className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 "
          >
            Update
          </button>
        )}
        {updated === "password" && (
          <button
            onClick={(e) => updatePassword(e)}
            className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 "
          >
            Update
          </button>
        )}
        {updated === "email" && (
          <button
            onClick={(e) => updateEmail(e)}
            className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 "
          >
            Update
          </button>
        )}
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
