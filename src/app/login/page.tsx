import LoginForm from "@/components/login/LoginForm";
import authOptions from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function page() {
  const session = (await getServerSession(authOptions)) as any;
  if (session?.user) {
    redirect("/");
  }
  return (
    <>
      <head>
        <title>The Crew || Login</title>
      </head>
      <div className="flex flex-col p-2w-[400px]  md:w-[550px]   mx-auto text-center items-center justify-center">
        <Link href={"/"}>
          <Image src="/logo.png" alt="Login" width={250} height={250} />
        </Link>
        <LoginForm />
      </div>
    </>
  );
}
export default page;
