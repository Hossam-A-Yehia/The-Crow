"use client";
import { CarFront, CircleUser, MailPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function NavBottom() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const [isActive, setIsActive] = useState(id);

  console.log(id);

  const icons = [
    {
      icon: <CarFront size={30} strokeWidth={3} />,
      link: "/client/car-wash-list",
      title: "car-washing",
    },

    {
      icon: <Image src="/logo.png" width={50} height={50} alt={""} />,
      link: "/",
      title: "home",
    },
    {
      icon: <MailPlus size={30} strokeWidth={3} />,
      link: "/client/send-message",
      title: "send-message",
    },
    {
      icon: <CircleUser size={30} strokeWidth={3} />,
      link: "/client/profile",
      title: "profile",
    },
  ];

  return (
    <div
      className="bg-slate-200 dark:bg-slate-900  w-full px-4 py-2 fixed bottom-0 "
      dir="ltr"
    >
      <div className="flex items-center justify-between">
        {icons.map((e) => (
          <Link
            onClick={() => setIsActive(e.title)}
            className={`transition-all duration-300  textblack p-2 rounded-full hover:bg-white  cursor-pointer hover:text-sky-700 ${
              isActive === e.title && "bg-white text-sky-700 -700"
            } `}
            key={e.title}
            href={e.link}
          >
            {e.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default NavBottom;
