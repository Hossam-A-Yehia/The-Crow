"use client";
import { URL } from "@/app/url";
import { X } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

function MessageBox({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [message, setmessage] = useState("");

  const { push } = useRouter();

  const token =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") as any).access_token
      : null;

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`${URL}/api/Message/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      console.log(data);
      push("/");
      toast.success("The message has been sent, thank you");
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className={`bg-[#0000006e] w-full h-[calc(100vh-160px)] flex items-center justify-center transition-all duration-300 absolute -top-[500px] left-0 ${
          open ? "top-[80px]" : "-top-[500px]"
        }`}
        dir="ltr"
      >
        <div className="bg-white dark:bg-slate-800 px-5 py-3 w-[400px] text-center">
          <X
            onClick={() => setOpen(false)}
            color="red"
            className="ml-auto cursor-pointer transition-all duration-300 hover:bg-white hover:text-red-900"
          />
          <h1 className="font-bold text-2xl dark:text-slate-100  ">
            Send A Message
          </h1>
          <form onSubmit={sendMessage} className="my-3">
            <textarea
              onChange={(e) => setmessage(e.target.value)}
              placeholder="Your Message..."
              className="p-2  border-[2px] border-sky-700 rounded-lg h-[200px] w-full outline-1 focus:outline-none "
            ></textarea>
            <button className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-4 dark:hover:text-white ">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default MessageBox;
