import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/components/register/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import authOptions from "@/utils/authOptions";

async function page() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/");
  }

  return (
    <>
      <head>
        <title>The Crew || Register</title>
      </head>

      <div className="flex flex-col px-4 py-2 w-[400px] mb-[80px]  md:w-full mx-auto text-center items-center justify-center">
        <Link href="/">
          <Image src="/logo.png" alt="Login" width={250} height={250} />
        </Link>
        <h2 className="text-4xl font-bold text-sky-700">انشاء حساب</h2>
        <RegisterForm />
      </div>
    </>
  );
}
export default page;
