import Image from "next/image";

function about({ arOrEn }: { arOrEn: string }) {
  return (
    <>
      {arOrEn === "ar" ? (
        <div className="p-4 my-24 text-center">
          <div className="flex flex-col gap-2 mb-[150px]">
            <span className="font-bold text-gray-500 ">THE CREW</span>
            <span className="font-bold text-3xl text-sky-700 tracking-wider">
              بعض الخدمات التي نقدمها
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
                الاحترافية
              </h3>
              <p className=" leading-7 text-sm text-slate-800 dark:text-slate-200">
                ١- تحديد المواعيد المناسبة لغسيل سيارتك
                <br />
                ٢- متابعة عدد المرات التي تم غسيلها خلال الشهر
                <br />
                ٣- التواصل مع فريق الدعم من خلال التطبيق في حال واجهت أي مشكلة
                أو لديك أي استفسار
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
                الكفاءة
              </h3>
              <p className=" leading-7 text-sm text-slate-800 dark:text-slate-200">
                نحن نعطي الأولوية للتميز والكفاءة في كل ما نقوم به
                <br />
                لا تبذير في الماء
                <br />
                لا تشفقات في طرق الكومباوند
                <br />
                منتجات ايطالية عالية الجودة
                <br />
                لا تأكل ولا خدوش علي سطوح سيارتك الغالية
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
                السرعة
              </h3>
              <p className=" leading-7 text-sm text-slate-800 dark:text-slate-200">
                مريحة وأمنة , وفر الوقت وركز علي ما يهم , لا يستغرق التسجيل سوي
                بضع دقائق ويوجد لدينا خيارات دفع مرنة مع انستاباي
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 my-24 text-center">
          <div className="flex flex-col gap-2 mb-[150px]">
            <span className="font-bold text-gray-500 ">THE CREW</span>
            <span className="font-bold text-3xl text-sky-700 tracking-wider">
              Some of the services we provide
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
                Professionalism
              </h3>
              <p className=" leading-7 text-sm text-slate-800 dark:text-slate-200">
                ١- Determine the appropriate times to wash your car
                <br />
                ٢- Track the number of times laundry was done during the month
                <br />
                Contact the support team through the application if you
                encounter any problem Or do you have any questions?
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
                Efficiency
              </h3>
              <p className=" leading-7 text-sm text-slate-800 dark:text-slate-200">
                We prioritize excellence and efficiency in everything we do
                <br />
                Don't waste water
                <br />
                No pity in the compound's roads
                <br />
                High quality Italian products
                <br />
                No corrosion or scratches on the surfaces of your expensive car
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
                the speed
              </h3>
              <p className=" leading-7 text-sm text-slate-800 dark:text-slate-200">
                Convenient and safe, save time and focus on what matters.
                Registration only takes a few minutes Just a few minutes and we
                have flexible payment options with InstaPay
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default about;
