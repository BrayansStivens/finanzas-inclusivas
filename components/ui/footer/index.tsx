import React from "react";
import { TbWorld } from "react-icons/tb";
import { PiPhoneLight } from "react-icons/pi";
import { HiOutlineMailOpen } from "react-icons/hi";
import ContactInfo from "./components/ContactInfo";
import SocialMediaIcons from "./components/SocialMediaIcons";
import { ISocialIcons } from "./interfaces/social-icons.interface";
import { IContactInfo } from "./interfaces/contact-info.interface";
import style from "./module/index.module.css";

const Footer: React.FC = () => {
  const icons: ISocialIcons[] = [];

  const contactData: IContactInfo[] = [
    {
      icon: (
        <TbWorld className="bg-[red] text-[40px] m-[10px] p-[5px] rounded-[50px]" />
      ),
      link: "https://kajhfiamvasod.gov.co/",
      text: "https://kajhfiamvasod.gov.co/",
    },
    {
      icon: (
        <PiPhoneLight className="bg-[red] text-[40px] m-[10px] p-[5px] rounded-[50px]" />
      ),
      link: "+57 606 7417700",
      text: "+57 606 7417700",
    },
    {
      icon: (
        <HiOutlineMailOpen className="bg-[red] text-[40px] m-[10px] p-[5px] rounded-[50px]" />
      ),
      link: "mailto:finanzasparatodas@upb.edu.co",
      text: "finanzasparatodas@upb.edu.co",
    },
  ];

  return (
    <footer className="bg-[#102E6A] text-[white] p-[20px] text-center mt-auto">
      {/* <div className="max-w-[1300px] mx-auto flex md:flex-row flex-col justify-start items-center">
        <div className="w-[90%]">
          <p className="text-left w-[90%] m-[10px] p-[5px]">
            Para dudas o sugerencias escríbenos
            <span className={style.underline}>
              <a href="https://microempresas.co/"> microempresas </a>
            </span>
            y
            <span className={style.underline}>
              <a href="https://www.upb.edu.co/es/home"> upb </a>
            </span>
          </p>
          <div>
            <ContactInfo contactData={contactData} />
          </div>
        </div>
        <div className="flex items-end mt-[10px]  md:mt-auto">
          <SocialMediaIcons icons={icons} />
        </div>
      </div> */}
      <div className="mt-[20px] justify-center max-w-[1300px] mx-[auto]">
        <p className="m-0 text-[18px] text-left m-5 text-[15px]">
          Para comentarios y sugerencias escribir al correo finanzasparatodas@upb.edu.co.
        </p>
        <hr className="border-[0] h-px bg-[#cacaca] mt-[0] mb-[10px]" />
      </div>
    </footer>
  );
};

export default Footer;


