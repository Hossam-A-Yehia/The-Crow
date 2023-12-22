"use client";
import { sendMessage } from "@/actions";
import { X } from "lucide-react";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { useFormStatus } from "react-dom";

function MessageBox({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { data } = useSession() as any;

  const { pending } = useFormStatus();

  console.log(pending);

  const handleMessage = async (formData: FormData) => {
    sendMessage(formData).then((e) => {
      if (e === "Done") {
        toast.success(e);
        setOpen(false);
      } else {
        toast.error(e);
      }
    });
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
            أكتب رسالتك
          </h1>
          <form action={handleMessage} className="my-3">
            <input type="hidden" name="userId" value={data?.user?._id} />
            <textarea
              name="message"
              placeholder="Your Message..."
              className="p-2  border-[2px] border-sky-700 rounded-lg h-[200px] w-full outline-1 focus:outline-none "
            ></textarea>
            <button
              type="submit"
              aria-disabled={pending}
              className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-4 dark:hover:text-white "
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default MessageBox;
