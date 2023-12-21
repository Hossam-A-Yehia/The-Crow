"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Landing({}: any) {
  const [arOrEn, setArOrEn] = useState<string>("ar");

  useEffect(() => {
    localStorage.setItem("lang", arOrEn);
  }, [arOrEn]);

  const changeLang = () => {
    arOrEn === "ar" ? setArOrEn("en") : setArOrEn("ar");
  };

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") as any)
      : null;
  return (
    <div className="p-4 w-full h-[calc(100vh-108px)] relative bg-landing bg-cover bg-red-500 content-[' '] before:absolute before:bg-[#000000b3] before:w-full before:h-full before:top-0 before:left-0 flex items-center justify-center before:z-1 ">
      <Button
        onClick={changeLang}
        className=" absolute top-0 w-fit left-0 z-50"
      >
        Ar/En
      </Button>
      <div className=" relative z-40 text-white text-center flex flex-col gap-3">
        {arOrEn === "ar" ? (
          <>
            <h1 className="text-3xl md:text-5xl font-bold ">
              اغسل <span className="text-sky-500">سيارتك</span> الأن
            </h1>
            <p className="my-5 w-[300px] md:w-[600px] lg:w-[800px]  text-xs md:text-sm  lg:text-base font-semibold leading-7 ">
              نحن نهتم بجميع التفاصيل. تتكون شبكتنا من أفراد مدربين تدريباً
              عالياً وتم إختيارهم بدقة. الاشتراك فى خدمتنا و تحميل تطبيقنا يتيح
              لك تجربة غسيل سيارة مميزة ومريحة عن طريق متابعة ومعرفة جدول غسيل
              سيارتك بدون أي عناء.
              <br />
              <br />
              <span className="text-sky-400">
                الاشتراك الشهري بقيمة 300 جنيه، اشترك خلال شهر يناير وادفع فقط
                250 جنيه يشمل غسيل السيارة من الخارج بالكامل غسيلا جافا ( 8 مرات
                شهريا).
              </span>
            </p>
            <Link
              href={`${user ? "/client/add-car" : " /register"}`}
              className="bg-sky-700 px-9 font-semibold  rounded-full text-white text-lg hover:bg-sky-800   dark:hover:bg-transparent  dark:hover:border-[1px]  dark:hover:border-white w-fit mx-auto py-2"
            >
              احجز الان
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-3xl md:text-5xl font-bold ">
              Wash <span className="text-sky-500">You car</span> now
            </h1>
            <p className="my-5 w-[300px] md:w-[600px] lg:w-[800px]  text-xs md:text-sm  lg:text-base font-semibold leading-7 ">
              We prioritize attention to every detail, and our network comprises
              meticulously chosen and highly trained individuals. When you
              subscribe to our service and download our application, you gain
              access to a unique and convenient car wash experience. This
              involves effortlessly managing and staying informed about your car
              wash schedule.
              <br />
              <br />
              <span className="text-sky-400">
                Our monthly subscription is available at a rate of 300 EGP. If
                you subscribe during January, you can take advantage of a
                special offer and pay only 250 EGP.{" "}
              </span>
            </p>
            <Link
              href={`${user ? "/client/add-car" : " /register"}`}
              className="bg-sky-700 px-9 font-semibold  rounded-full text-white text-lg hover:bg-sky-800   dark:hover:bg-transparent  dark:hover:border-[1px]  dark:hover:border-white w-fit mx-auto py-2"
            >
              Subscribe Now
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
export default Landing;
