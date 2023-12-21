import ProfileForm from "@/components/Client/ProfileForm";

async function page() {
  return (
    <div className="flex flex-col px-4 py-2 w-[400px] mb-[80px]  md:w-full mx-auto text-center items-center justify-center ">
      <h3 className="text-center text-[40px] text-sky-700 font-bold mb-2 md:mb-1 ">
        Your Profile
      </h3>
      <ProfileForm />
    </div>
  );
}
export default page;
