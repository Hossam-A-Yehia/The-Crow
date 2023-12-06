import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col px-4 py-2 w-[400px] mb-[80px]  md:w-full mx-auto text-center items-center justify-center">
      <Link href="/">
        <Image src="/logo.png" alt="Login" width={250} height={250} />
      </Link>
      <h2 className="text-4xl font-bold text-sky-700">انشاء حساب</h2>
      <form action="" className="w-full mt-[30px] ">
        <div className="flex items-center md:items-start gap-4 flex-col md:flex-row ">
          <div className="flex flex-col items-start w-full md:w-1/4 ">
            <label htmlFor="firstName" className="font-bold ">
              الاسم الاول :*
            </label>
            <input
              type="text"
              name=""
              id="firstName"
              placeholder="اسمك الاول"
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
            />
          </div>
          <div className="flex flex-col items-start w-full md:w-1/4 ">
            <label htmlFor="lastName" className="font-bold ">
              اسم العائلة :*
            </label>
            <input
              type="text"
              name=""
              id="lastName"
              placeholder="اسمك الاخير"
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
            />
          </div>
          <div className="flex flex-col items-start w-full md:w-1/4 ">
            <label htmlFor="email" className="font-bold ">
              البريد الالكتروني :*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="ادخل بريدك الالكتروني..."
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
            />
          </div>
          <div className="flex flex-col items-start w-full md:w-1/4 ">
            <label htmlFor="password" className="font-bold ">
              كلمة المرور :*
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="ادخل كلمة المرور..."
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200"
            />
          </div>
        </div>
        <div className="flex items-center md:items-start gap-4 flex-col md:flex-row my-6 ">
          <div className="flex flex-col items-start w-full md:w-1/4 ">
            <label htmlFor="firstName" className="font-bold mb-1 ">
              الجنس :*
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="male" selected>
                ذكر
              </option>
              <option value="female">انثي</option>
            </select>
          </div>
          <div className="flex flex-col items-start w-full md:w-1/4 ">
            <label htmlFor="phone" className="font-bold ">
              رقم الهاتف :*
            </label>
            <input
              type="number"
              name=""
              id="phone"
              placeholder="رقم هاتفك"
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
            />
          </div>
          <div className="flex flex-col items-start w-full md:w-1/4 ">
            <label htmlFor="zone" className="font-bold ">
              رقم المنطقة :*
            </label>
            <input
              type="number"
              name=""
              id="zone"
              placeholder="رقم منطقتك"
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
            />
          </div>
          <div className="flex flex-col items-start w-full md:w-1/4 ">
            <label htmlFor="number" className="font-bold ">
              رقم المبني :*
            </label>
            <input
              type="number"
              name=""
              id="number"
              placeholder="رقم المبني"
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200"
            />
          </div>
        </div>
        <div className="flex items-center md:items-start gap-4 flex-col md:flex-row my-6 ">
          <div className="flex flex-col items-start w-full md:w-1/4 ">
            <label htmlFor="apartment " className="font-bold ">
              رقم الشقة :*
            </label>
            <input
              type="number"
              name=""
              id="apartment"
              placeholder="رقم الشقة"
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
            />
          </div>
          <div className="flex flex-col items-start w-full md:w-1/4 ">
            <label htmlFor="carModel" className="font-bold ">
              نوع السيارة :*
            </label>
            <input
              type="text"
              name=""
              id="carModel"
              placeholder="نوع سيارتك"
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-2 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
            />
          </div>
          <div className="flex flex-col items-start w-full md:w-1/4 ">
            <label htmlFor="carColor" className="font-bold ">
              لون السيارة :*
            </label>
            <input
              type="text"
              name=""
              id="carColor"
              placeholder="لون سيارتك"
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200 "
            />
          </div>
          <div className="flex flex-col items-start w-full md:w-1/4 ">
            <label htmlFor="number" className="font-bold ">
              معلومات لوحة السيارة :*
            </label>
            <input
              type="number"
              name=""
              id="number"
              placeholder="معلومات لوحة سيارتك"
              className="p-2 text-slate-900 font-bold placeholder:font-bold placeholder:text-slate-400   w-full  mt-2 mb-1 transition-transform duration-300 focus:-translate-x-4 focus:outline-none  border-sky-500 border-[1px] dark:bg-transparent dark:focus:outline-none dark:focus:border-sky-700 dark:text-slate-200"
            />
          </div>
        </div>
        <div className="flex items-center justify-between md:items-start gap-4 flex-col md:flex-row my-6 ">
          <div className="flex flex-col items-start w-full md:w-[500px] ">
            <label htmlFor="firstName" className="font-bold mb-1 ">
              أيام جدول غسيل السيارات :*
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="male" selected>
                الاثنين و الخميس
              </option>
              <option value="female">الأحد والأربعاء</option>
              <option value="female">السبت والثلاثاء</option>
            </select>
          </div>
          <div className="flex flex-col items-start w-full md:w-[500px] ">
            <label htmlFor="firstName" className="font-bold mb-1 ">
              اختر الوقت المفضل :*
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="10:00pm-10:20pm">10:00pm-10:20pm</option>
              <option value="10:25pm-10:45pm">10:25pm-10:45pm</option>
              <option value="10:50pm-11:10pm">10:50pm-11:10pm</option>
              <option value="11:15pm-11:35pm">11:15pm-11:35pm</option>
              <option value="11:40pm-12:00am">11:40pm-12:00am</option>
              <option value="12:05am-12:25am">12:05am-12:25am</option>
              <option value="12:30am-12:50am">12:30am-12:50am</option>
              <option value="12:55am-01:15am">12:55am-01:15am</option>
              <option value="01:20am-01:40am">01:20am-01:40am</option>
              <option value="01:45am-02:05am">01:45am-02:05am</option>
              <option value="02:10am-02:30am">02:10am-02:30am</option>
              <option value="02:35am-02:55am">02:35am-02:55am</option>
              <option value="03:00am-03:20am">03:00am-03:20am</option>
              <option value="03:25am-03:45am">03:25am-03:45am</option>
              <option value="03:50am-04:10am">03:50am-04:10am</option>
              <option value="04:15am-04:35am">04:15am-04:35am</option>
              <option value="04:40am-05:00am">04:40am-05:00am</option>
              <option value="05:05am-05:25am">05:05am-05:25am</option>
              <option value="05:30am-05:50am">05:30am-05:50am</option>
              <option value="05:55am-06:15am">05:55am-06:15am</option>
              <option value="06:20am-06:40am">06:20am-06:40am</option>
              <option value="06:45am-07:05am">06:45am-07:05am</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mb-4 ">
          <button className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-lg hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 ">
            انشاء حساب
          </button>
          <span className="my-1 font-bold text-lg tracking-widest">Or</span>
          <Link
            href="/login"
            className="  block hover:bg-sky-700 border-[1px] duration-300 rounded-lg hover:text-white text-lg bg-white border-sky-700 hover:border-white text-slate-700 dark:hover:bg-transparent py-2 px-3 "
          >
            تسجيل دخول
          </Link>
        </div>
        <span className="font-bold text-lg">
          ادفع اشتراكك الشهرى الان عن طريق انستا باى على رقم: ٠١٠٩٩٧١٥٥٥٦
        </span>
      </form>
    </div>
  );
}
export default page;
