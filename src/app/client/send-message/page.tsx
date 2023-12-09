"use client";
import MessageBox from "@/components/Client/MessageBox";
import { useState } from "react";

function page() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <head>
        <title>The Crew || Send Message</title>
      </head>
      <div className=" my-[80px] p-2 overflow-hidden">
        <h3 className="text-center text-[40px] text-sky-700 font-bold mb-2 md:mb-1 ">
          Send Message to Admin
        </h3>
        <button
          className="block mx-auto bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 mt-5"
          onClick={() => setOpen(true)}
        >
          Send Now
        </button>
        <MessageBox open={open} setOpen={setOpen} />
      </div>
    </>
  );
}
export default page;
