import Link from "next/link";

function page() {
  return (
    <div className=" h-[calc(100vh-160px)] my-2 p-4  ">
      <h3 className="text-center text-[40px] text-sky-700 font-bold mb-2 md:mb-1 ">
        Update Car
      </h3>
      <form action="" className="w-full mt-[30px] ">
        <div className="flex items-center md:items-start gap-4 flex-col md:flex-row ">
          <div className="flex flex-col items w-full md:w-1/3 ">
            <label htmlFor="Car-plate-information" className="font-bold ">
              نمرة السيارة :*
            </label>
            <input
              type="text"
              name=""
              id="Car-plate-information"
              placeholder="484"
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
            />
          </div>
          <div className="flex flex-col items-start w-full md:w-1/3 ">
            <label htmlFor="Car-model" className="font-bold ">
              موديل السيارة :*
            </label>
            <input
              type="text"
              name=""
              id="Car-model"
              placeholder=" كيا"
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
            />
          </div>
          <div className="flex flex-col items-start w-full md:w-1/3 ">
            <label htmlFor="Car-Color" className="font-bold ">
              لون السيارة :*
            </label>
            <input
              type="text"
              name="Car-Color"
              id="Car-Color"
              placeholder="اسود"
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
            />
          </div>
        </div>
        <div className="flex items-center justify-between md:items-start gap-4 flex-col md:flex-row my-6 ">
          <div className="flex flex-col items-start w-full md:w-1/2  ">
            <label htmlFor="firstName" className="font-bold mb-1 ">
              تحديد العنوان :*
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="10:00pm-10:20pm">
                Building-4654 || Apartment.765 || Zone.7667
              </option>
              <option value="10:00pm-10:20pm">
                Building-4654 || Apartment.765 || Zone.7667
              </option>
            </select>
          </div>
          <div className="flex flex-col items-start w-full md:w-1/2 ">
            <label htmlFor="firstName" className="font-bold mb-1 ">
              ايام غسيل السيارات :*
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Mon-Thu">الاتنين والخميس</option>
              <option value="Sun-Wed">الاحد و الاربعاء</option>
              <option value="Sat-Tue">السبت والثلاثاء</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-6 ">
          <button className=" mb-[200px] md:mb-0  block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 ">
            Update car
          </button>
          <Link
            href="/client/car-wisth-list"
            className=" mb-[200px] md:mb-0  block bg-red-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-red-700 hover:text-red-700 dark:hover:bg-transparent py-2 px-3 "
          >
            Cars List
          </Link>
        </div>
      </form>
    </div>
  );
}
export default page;
