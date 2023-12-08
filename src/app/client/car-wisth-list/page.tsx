import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function page() {
  const table = true;
  return (
    <div className="h-[calc(100vh-160px)] my-2 p-2">
      <h3 className="text-center text-[40px] text-sky-700 font-bold mb-2 md:mb-1 ">
        Car Wish List
      </h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Link
          href="/client/add-car"
          className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-base hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 ml-auto mb-3 font-semibold w-fit"
        >
          Add Car
        </Link>{" "}
        {table ? (
          <table className="w-full text-sm text-right  text-gray-500 dark:text-gray-400 mb-[50px]">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  className="px-6 py-3"
                >
                  نمرة السيارة
                </th>
                <th scope="col " className="px-6 py-3 whitespace-nowrap  ">
                  موديل السيارة
                </th>
                <th scope="col " className="px-6 py-3 whitespace-nowrap ">
                  لون السيارة
                </th>
                <th scope="col " className="px-6 py-3 whitespace-nowrap ">
                  العنوان
                </th>
                <th scope="col " className="px-6 py-3 whitespace-nowrap ">
                  ايام غشسيل السيارات
                </th>
                <th scope="col " className="px-6 py-3 whitespace-nowrap ">
                  حضف / تعديل
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  296"
                </th>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  كيا
                </td>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  احمر
                </td>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  رقم المبني - 200 || رقم الشقة-8 || رقم المنطقة-30
                </td>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  الثلاثاء والخميس
                </td>
                <td className="px-6 py-4 flex items-center ">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    حذف
                  </button>
                  <Link
                    href=""
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
                  >
                    تعديل
                  </Link>
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  296"
                </th>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  كيا
                </td>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  احمر
                </td>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  رقم المبني - 200 || رقم الشقة-8 || رقم المنطقة-30
                </td>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  الثلاثاء والخميس
                </td>
                <td className="px-6 py-4 flex items-center ">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    حذف
                  </button>
                  <Link
                    href=""
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
                  >
                    تعديل
                  </Link>
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  296"
                </th>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  كيا
                </td>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  احمر
                </td>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  رقم المبني - 200 || رقم الشقة-8 || رقم المنطقة-30
                </td>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  الثلاثاء والخميس
                </td>
                <td className="px-6 py-4 flex items-center ">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    حذف
                  </button>
                  <Link
                    href=""
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
                  >
                    تعديل
                  </Link>
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  296"
                </th>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  كيا
                </td>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  احمر
                </td>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  رقم المبني - 200 || رقم الشقة-8 || رقم المنطقة-30
                </td>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  الثلاثاء والخميس
                </td>
                <td className="px-6 py-4 flex items-center ">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    حذف
                  </button>
                  <Link
                    href=""
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
                  >
                    تعديل
                  </Link>
                </td>
              </tr>
            </tbody>
            <button className="mb-[50px]"></button>
          </table>
        ) : (
          <div className="bg-red-200 p-4 w-fit text-center mx-auto rounded-lg text-xl font-semibold mb-2">
            There are no cars currently!{" "}
          </div>
        )}
      </div>
    </div>
  );
}
export default page;
