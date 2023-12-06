import Image from "next/image";
function Contact() {
  return (
    <div className="  text-center my-[150px] ">
      <div className="flex flex-col gap-2 mb-[90px]">
        <span className="font-bold text-gray-500 ">اتصل بنا</span>
        <span className="font-bold text-3xl text-sky-700 tracking-wider">
          موجودين دايما علشانك
        </span>
      </div>{" "}
      <div className="flex items-center gap-[130px] justify-center mt-16 flex-col md:flex-row">
        <Image
          src="/contact.svg"
          width={350}
          height={350}
          className=" animate-wiggle "
          alt={""}
        />
        <form action="" className="flex flex-col gap-2 w-96">
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
  );
}

export default Contact;
