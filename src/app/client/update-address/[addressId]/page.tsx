import Link from "next/link";

function page() {
  return (
    <div className=" h-[calc(100vh-160px)] my-2 p-4  ">
      <h3 className="text-center text-[40px] text-sky-700 font-bold mb-2 md:mb-1 ">
        Update Adedres
      </h3>
      <form action="" className="w-full mt-[30px] ">
        <div className="flex items-center md:items-start gap-4 flex-col md:flex-row ">
          <div className="flex flex-col items w-full md:w-1/2 ">
            <label htmlFor="Car-plate-information" className="font-bold ">
              رقم المبني :*
            </label>
            <input
              type="text"
              name=""
              id="Car-plate-information"
              placeholder="4648"
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
            />
          </div>
          <div className="flex flex-col items-start w-full md:w-1/2 ">
            <label htmlFor="Car-model" className="font-bold ">
              رقم الشقة :*
            </label>
            <input
              type="text"
              name=""
              id="Car-model"
              placeholder=" 30"
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
            />
          </div>
        </div>
        <div className="flex items-center md:items-start gap-4 flex-col md:flex-row  mt-3">
          <div className="flex flex-col items-start w-full md:w-1/2 mx-auto ">
            <label htmlFor="Car-Color" className="font-bold ">
              رقم المنطقة :*
            </label>
            <input
              type="text"
              name="Car-Color"
              id="Car-Color"
              placeholder="+048"
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-6 ">
          <button className=" mb-[200px] md:mb-0  block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 ">
            Update car
          </button>
          <Link
            href="/client/address-list"
            className=" mb-[200px] md:mb-0  block bg-red-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-red-700 hover:text-red-700 dark:hover:bg-transparent py-2 px-3 "
          >
            Address List
          </Link>
        </div>
      </form>
    </div>
  );
}
export default page;
