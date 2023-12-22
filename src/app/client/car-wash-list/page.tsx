import { fetchCars } from "@/actions";
import CarsTable from "@/components/Client/CarsTable";
import authOptions from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
async function page() {
  const { user } = (await getServerSession(authOptions)) as any;

  const cars: any = await fetchCars(user._id);
  console.log(cars);

  return (
    <>
      <head>
        <title>The Crew || Cars list</title>
      </head>
      <div className="h-[calc(100vh-160px)] my-2 p-2">
        <h3 className="text-center text-[40px] text-sky-700 font-bold mb-2 md:mb-1 ">
          قائمة السيارات
        </h3>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <Link
            href="/client/add-car"
            className=" block bg-sky-700 border-[1px] duration-300  rounded-lg text-white text-base hover:bg-white hover:border-sky-700 hover:text-sky-700 dark:hover:bg-transparent py-2 px-3 ml-auto mb-3 font-semibold w-fit"
          >
            اضافة سيارة
          </Link>{" "}
          <CarsTable carsList={cars} />
        </div>
      </div>
    </>
  );
}
export default page;
