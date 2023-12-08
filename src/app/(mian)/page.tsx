"use client";
import Landing from "@/components/Home/Landing";
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Home/Footer";
import { useEffect, useState } from "react";

function page() {
  const [arOrEn, setArOrEn] = useState<string>("ar");

  useEffect(() => {
    localStorage.setItem("lang", arOrEn);
  }, [arOrEn]);

  const changeLang = () => {
    arOrEn === "ar" ? setArOrEn("en") : setArOrEn("ar");
  };
  return (
    <div className="">
      <Landing arOrEn={arOrEn} changeLang={changeLang} />
      <About arOrEn={arOrEn} />
      <Contact arOrEn={arOrEn} />
      <Footer arOrEn={arOrEn} />
    </div>
  );
}
export default page;
