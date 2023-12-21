import { deleteCar } from "@/actions";
import Link from "next/link";

function CarsTable({ carsList }: any) {
  return (
    <>
      {carsList.length > 0 ? (
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
                ايام غسيل السيارات
              </th>
              <th scope="col " className="px-6 py-3 whitespace-nowrap ">
                حذف / تعديل
              </th>
            </tr>
          </thead>
          <tbody>
            {carsList?.map((e: any) => (
              <tr
                key={e._id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {e.car_number}
                </th>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {e.car_model}
                </td>
                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {e.car_color}
                </td>

                <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {e.Car_Wash_Schedule_Days}
                </td>
                <td className="px-6 py-4 flex items-center ">
                  <form action={deleteCar}>
                    <input type="hidden" name="id" value={e._id} />
                    <button
                      type="submit"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      حذف
                    </button>
                  </form>
                  <Link
                    href={`/client/update-car/${e._id}`}
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
                  >
                    تعديل
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <button className="mb-[50px]"></button>
        </table>
      ) : (
        <div className="bg-red-200 p-4 w-fit text-center mx-auto rounded-lg text-xl font-semibold mb-2 dark:bg-red-600">
          There are no cars currently!{" "}
        </div>
      )}
    </>
  );
}
export default CarsTable;
