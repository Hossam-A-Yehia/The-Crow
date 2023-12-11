import CarForm from "@/components/Client/CarForm";

function page() {
  return (
    <>
      <head>
        <title>The Crew || Add Car</title>
      </head>

      <div className=" h-[calc(100vh-160px)] my-2 p-4  ">
        <h3 className="text-center text-[40px] text-sky-700 font-bold mb-2 md:mb-1 ">
          Add New Car
        </h3>
        <CarForm />
      </div>
    </>
  );
}
export default page;
