import TopNav from "@/components/TopNav";
import ForgetPasswordForm from "@/components/login/ForgetPasswordForm";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <>
      <head>
        <title>The Crew || Forget Password</title>
      </head>
      <TopNav />
      <div className="flex flex-col p-2w-[400px]  md:w-[500px]   mx-auto text-center items-center justify-center">
        <Link href={"/"}>
          <Image src="/logo.png" alt="Login" width={250} height={250} />
        </Link>
        <h2 className="text-2xl font-bold text-sky-700">
          ادخل بريدك الالكتروني لاستعادة كلمة المرور
        </h2>
        <ForgetPasswordForm />
      </div>
    </>
  );
}
export default page;
