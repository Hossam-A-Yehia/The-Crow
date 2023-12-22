import { fetchCar } from "@/actions";
import CarUpdateForm from "@/components/Client/CarUpdateForm";

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
          تعديل السيارة
        </h3>
        <CarUpdateForm singleCar={singleCar} />
      </div>
    </>
  );
}
export default page;
