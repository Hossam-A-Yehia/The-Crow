import TopNav from "@/components/TopNav";
import ResetPasswordForm from "@/components/login/ResetPasswordForm";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <>
      <head>
        <title>The Crew || New Password</title>
      </head>
      <TopNav />
      <div className="flex flex-col p-2 w-[350px]  md:w-[500px]   mx-auto text-center items-center justify-center">
        <Link href={"/"}>
          <Image src="/logo.png" alt="Login" width={250} height={250} />
        </Link>
        <h2 className="text-2xl font-bold text-sky-700">
          اكتب كلمة المرور الجديدة
        </h2>

        <ResetPasswordForm />
      </div>
    </>
  );
}
export default page;
