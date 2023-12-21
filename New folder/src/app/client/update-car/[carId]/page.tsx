import { fetchCar } from "@/actions";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CarUpdateForm from "@/components/Client/CarUpdateForm";
import { getServerSession } from "next-auth";

async function page({ params }: { params: { carId: string } }) {
  const singleCar = await fetchCar(params.carId);

  console.log(singleCar);

  return (
    <>
      <head>
        <title>The Crew || Update Car</title>
      </head>
      <div className=" h-[calc(100vh-160px)] my-2 p-4  ">
        <h3 className="text-center text-[40px] text-sky-700 font-bold mb-2 md:mb-1 ">
          Update Car
        </h3>
        <CarUpdateForm singleCar={singleCar} />
      </div>
    </>
  );
}
export default page;
