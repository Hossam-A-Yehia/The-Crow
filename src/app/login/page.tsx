import LoginForm from "@/components/login/LoginForm";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <>
      <head>
        <title>The Crew || Login</title>
      </head>
      <div className="flex flex-col p-2w-[400px]  md:w-[500px]   mx-auto text-center items-center justify-center">
        <Link href={"/"}>
          <Image src="/logo.png" alt="Login" width={250} height={250} />
        </Link>
        <LoginForm />
      </div>
    </>
  );
}
export default page;
