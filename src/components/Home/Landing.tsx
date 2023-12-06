import { Button } from "../ui/button";

function Landing() {
  return (
    <div className="p-4 w-full h-[calc(100vh-108px)] relative bg-landing bg-cover bg-red-500 content-[' '] before:absolute before:bg-[#000000b3] before:w-full before:h-full before:top-0 before:left-0 flex items-center justify-center before:z-1 ">
      <div className=" relative z-40 text-white text-center flex flex-col gap-3">
        <h1 className="text-5xl font-bold ">
          اغسل <span className="text-sky-500">سيارتك</span> الأن
        </h1>
        <p className="my-5 w-[400px] md:w-[600px] lg:w-[800px]  text-xs md:text-sm  lg:text-base font-semibold leading-7 ">
          نحن نهتم بجميع التفاصيل. تتكون شبكتنا من أفراد مدربين تدريباً عالياً
          وتم إختيارهم بدقة الاشتراك فى خدمتنا و تحميل تطبيقنا يتيح لك تجربة
          غسيل سيارة مميزة ومريحة عن طريق متابعة ومعرفة جدول غسيل سيارتك بدون أي
          عناء
          <br />
          <br />
          <span className="text-sky-400">
            الاشتراك الشهري مسعر بقيمة 175 جنيه، اشترك خلال أسبوع الافتتاح
            التجريبي لدينا وادفع فقط 150 جنيه
          </span>
        </p>

        <Button className="bg-sky-700 px-9 font-semibold  rounded-full text-white text-lg hover:bg-sky-800   dark:hover:bg-transparent  dark:hover:border-[1px]  dark:hover:border-white w-fit mx-auto">
          احجز الان
        </Button>
      </div>
    </div>
  );
}
export default Landing;
