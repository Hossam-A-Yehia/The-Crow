import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <div className=" bg-slate-100 px-4 py-[50px] dark:bg-slate-900 text-center">
      <div className=" flex items-center md:items-start justify-between mx-auto flex-col md:flex-row">
        <div className="flex flex-col gap-3 border-b-[1px] border-slate-300 w-full py-3 my-3 md:m-0 md:p-0 md:border-none ">
          <h1 className="font-bold text-2xl ">مواعيد العمل </h1>
          <div className="flex flex-col gap-1">
            <span className="  text-sm text-gray-500 font-semibold">
              السبت - الخميس
            </span>
            <span className=" font-medium text-xl">
              من 8 صباحا الي 12 مساءا
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-500 font-semibold">الجمعة</span>
            <span className=" font-medium text-xl">
              من 8 صباحا الي 10 مساءا
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b-[1px] border-slate-300 w-full py-3 my-3 md:m-0 md:p-0 md:border-none">
          <h1 className="font-bold text-2xl text-center ">النشرة الاخبارية </h1>
          <ul className="flex flex-col gap-1">
            <li className="text-xl text-gray-500 font-semibold">
              - اشترك في نشرتنا الاخبارية
            </li>
            <li className="text-xl text-gray-500 font-semibold">
              - احصل علي احدث الوجبات
            </li>
            <li className="text-xl text-gray-500 font-semibold">
              - احصل علي احدث الخصومات
            </li>
            <li className="text-xl text-gray-500 font-semibold">
              - كل شيء اسبوعيا
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 border-b-[1px]   mt-3 md:m-0 ">
          <h1 className="font-bold text-2xl text-center whitespace-nowrap ">
            وسائل التواصل الاجتماعي{" "}
          </h1>
          <div className="flex items-center gap-4 justify-center">
            <Facebook className="text-2xl text-blue-600" />
            <Instagram className="text-2xl text-red-600" />
            <Twitter className="text-3xl text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
