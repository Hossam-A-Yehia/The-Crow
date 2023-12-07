import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function page() {
  const table = true;
  return (
    <div className="h-[calc(100vh-160px)] my-[80px] p-4">
      <h3 className="text-center text-[40px] text-sky-700 font-bold mb-2 md:mb-1 ">
        Address List
      </h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Link
          href="/client/add-address"
          className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-base hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 ml-auto mb-3 font-semibold w-fit"
        >
          Add Address
        </Link>{" "}
        {table ? (
          <table className="w-full text-sm text-right  text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col whitespace-nowrap" className="px-6 py-3">
                  رقم المبني:
                </th>
                <th scope="col whitespace-nowrap" className="px-6 py-3">
                  رقم الشقة
                </th>
                <th scope="col whitespace-nowrap" className="px-6 py-3">
                  رقم المنطقة
                </th>
                <th scope="col whitespace-nowrap" className="px-6 py-3">
                  حذف / تعديل
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  87892
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  2080
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  +456
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
                  87892
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  2080
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  +456
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
                  87892
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  2080
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  +456
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
            There are no addresses currently!{" "}
          </div>
        )}
      </div>
    </div>
  );
}
export default page;
