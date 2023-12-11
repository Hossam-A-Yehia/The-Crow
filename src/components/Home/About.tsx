"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

function About() {
  const [arOrEn, setArOrEn] = useState<string>("ar");

  useEffect(() => {
    localStorage.setItem("lang", arOrEn);
  }, [arOrEn]);

  const changeLang = () => {
    arOrEn === "ar" ? setArOrEn("en") : setArOrEn("ar");
  };

  return (
    <div className=" relative">
      <Button
        onClick={changeLang}
        className=" absolute top-0 w-fit left-0 z-50"
      >
        Ar/En
      </Button>
      {arOrEn === "ar" ? (
        <div className="p-4 my-24 text-center">
          <div className="flex flex-col gap-2 mb-[150px]">
            <span className="font-bold text-gray-500 ">THE CREW</span>
            <span className="font-bold text-3xl text-sky-700 tracking-wider">
              لماذا نحن !
            </span>
          </div>
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  ">
            <div className=" col-span-1 md:col-span-1 mb-[50px] group transition-all duration-300 flex items-center flex-col gap-5 bg-slate-200 hover:bg-slate-300 border-[1px] hover:border-slate-200 px-[5px] py-4  dark:bg-slate-800 dark:hover:border-slate-800 dark:hover:bg-slate-900 hover:-translate-y-3 relative  ">
              <div className="w-[120px] h-[120px] absolute top-[-70px] group-hover:rotate-[360deg]">
                <Image
                  src="/1.jpg"
                  alt="Se"
                  fill
                  className="transition-all duration-200 rounded-full "
                />
              </div>
              <h3 className="mt-20 mb-[20px] text-2xl font-bold tracking-wider ">
                احترافي
              </h3>
              <p className=" leading-7 text-sm text-slate-800 dark:text-slate-200">
                شراكتنا حصرية مع أرقى التفاصيل، والتي تضم محترفين مدربين تدريباً
                عالياً وتم فحصهم بدقة. <br />
                يتيح لك الاشتراك في خدمتنا وتنزيل تطبيقنا تجربة رحلة غسيل سيارات
                مميزة ومريحة، والبقاء على اطلاع بسهولة بجدول غسيل سيارتك. <br />
                اختر المواعيد الأنسب لغسيل سيارتك.
                <br />
                تتبع عدد الغسلات خلال الشهر.
                <br />
                التواصل مع فريق الدعم لدينا من خلال التطبيق لأية مشاكل أو
                استفسارات.
                <br />
                احجز اشتراكك الآن واستمتع بخدمة غسيل سيارات عالية الجودة وخالية
                من المتاعب.
              </p>
            </div>
            <div className=" col-span-1 md:col-span-1 mb-[50px] group transition-all duration-300 flex items-center flex-col gap-5 bg-slate-200 hover:bg-slate-300 border-[1px] hover:border-slate-200 px-[5px] py-4 relative dark:bg-slate-800 dark:hover:border-slate-800 dark:hover:bg-slate-900  hover:-translate-y-3 ">
              <div className="w-[120px] h-[120px] absolute top-[-70px] group-hover:rotate-[360deg]">
                <Image
                  src="/clean.jpg"
                  alt="Se"
                  fill
                  className="transition-all duration-200 rounded-full "
                />
              </div>
              <h3 className="mt-20 mb-[20px] text-2xl font-bold tracking-wider ">
                فعال
              </h3>
              <p className=" leading-7 text-sm text-slate-800 dark:text-slate-200">
                نحن نعطي الأولوية للتميز والكفاءة في كل ما نقوم به. <br />
                لا هدر المياه. <br />
                لا توجد شقوق على الطرق في مجمعنا. <br />
                منتجات ايطالية عالية الجودة. <br />
                لا يوجد تآكل أو خدوش في الأسطح المعدنية لسيارتك..{" "}
              </p>
            </div>
            <div className=" col-span-1 md:col-span-1 mb-[50px] group transition-all duration-300 flex items-center flex-col gap-5 bg-slate-200 hover:bg-slate-300 border-[1px] hover:border-slate-200 px-[5px] py-4 relative dark:bg-slate-800 dark:hover:border-slate-800 dark:hover:bg-slate-900  hover:-translate-y-3 ">
              <div className="w-[120px] h-[120px] absolute top-[-70px] group-hover:rotate-[360deg]">
                <Image
                  src="/2.jpg"
                  alt="Se"
                  fill
                  className="transition-all duration-200 rounded-full "
                />
              </div>
              <h3 className="mt-20 mb-[20px] text-2xl font-bold tracking-wider ">
                سريع
              </h3>
              <p className=" leading-7 text-sm text-slate-800 dark:text-slate-200">
                توفير الوقت والتركيز على ما يهم.
                <br />
                لا يستغرق التسجيل سوى بضع نقرات ويتم تأمين الدفع باستخدام
                إنستاباي.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 my-24 text-center">
          <div className="flex flex-col gap-2 mb-[150px]">
            <span className="font-bold text-gray-500 ">THE CREW</span>
            <span
              className="font-bold text-3xl text-sky-700 tracking-wider"
              dir="ltr"
            >
              Why The Crew !
            </span>
          </div>
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  ">
            <div className=" col-span-1 md:col-span-1 mb-[50px] group transition-all duration-300 flex items-center flex-col gap-5 bg-slate-200 hover:bg-slate-300 border-[1px] hover:border-slate-200 px-[5px] py-4  dark:bg-slate-800 dark:hover:border-slate-800 dark:hover:bg-slate-900 hover:-translate-y-3 relative  ">
              <div className="w-[120px] h-[120px] absolute top-[-70px] group-hover:rotate-[360deg]">
                <Image
                  src="/1.jpg"
                  alt="Se"
                  fill
                  className="transition-all duration-200 rounded-full "
                />
              </div>
              <h3 className="mt-20 mb-[20px] text-2xl font-bold tracking-wider ">
                Professional
              </h3>
              <p
                className=" text-sm text-slate-800 dark:text-slate-200"
                dir="ltr"
              >
                - Our partnership is exclusively with the finest detailers,
                comprising highly trained and meticulously vetted professionals.
                <br />
                - Subscribing to our service and downloading our application
                allows you to experience a distinctive and convenient car wash
                journey, effortlessly staying informed about your cars wash
                schedule.
                <br />
                - Choose the most suitable appointments for your car wash.
                <br />
                - Keep track of the number of washes within the month.
                <br />
                - Communicate with our support team through the app for any
                issues or inquiries.
                <br />- Reserve your subscription now and indulge in a
                hassle-free, high-quality car wash service.
              </p>
            </div>
            <div className=" col-span-1 md:col-span-1 mb-[50px] group transition-all duration-300 flex items-center flex-col gap-5 bg-slate-200 hover:bg-slate-300 border-[1px] hover:border-slate-200 px-[5px] py-4 relative dark:bg-slate-800 dark:hover:border-slate-800 dark:hover:bg-slate-900  hover:-translate-y-3 ">
              <div className="w-[120px] h-[120px] absolute top-[-70px] group-hover:rotate-[360deg]">
                <Image
                  src="/clean.jpg"
                  alt="Se"
                  fill
                  className="transition-all duration-200 rounded-full "
                />
              </div>
              <h3 className="mt-20 mb-[20px] text-2xl font-bold tracking-wider ">
                Efficient
              </h3>
              <p className=" leading-7 text-sm text-slate-800 dark:text-slate-200">
                We prioritize excellence and efficiency in everything we do.
                <br />
                No water wastage.
                <br />
                No road cracks in our compound.
                <br />
                High-quality Italian products.
                <br />
                No corrosion and scratches in your cars metal surfaces..
              </p>
            </div>
            <div className=" col-span-1 md:col-span-1 mb-[50px] group transition-all duration-300 flex items-center flex-col gap-5 bg-slate-200 hover:bg-slate-300 border-[1px] hover:border-slate-200 px-[5px] py-4 relative dark:bg-slate-800 dark:hover:border-slate-800 dark:hover:bg-slate-900  hover:-translate-y-3 ">
              <div className="w-[120px] h-[120px] absolute top-[-70px] group-hover:rotate-[360deg]">
                <Image
                  src="/2.jpg"
                  alt="Se"
                  fill
                  className="transition-all duration-200 rounded-full "
                />
              </div>
              <h3 className="mt-20 mb-[20px] text-2xl font-bold tracking-wider ">
                Fast
              </h3>
              <p
                className=" leading-7 text-sm text-slate-800 dark:text-slate-200"
                dir="ltr"
              >
                Save time and focus on what matters.
                <br />
                Registering only takes a few clicks and payment is secured with
                Instapay.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default About;
