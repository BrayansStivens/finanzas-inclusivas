import React from "react";
import { TbWorld } from "react-icons/tb";
import { PiPhoneLight } from "react-icons/pi";
import { HiOutlineMailOpen } from "react-icons/hi";
import ContactInfo from "./components/ContactInfo";
import SocialMediaIcons from "./components/SocialMediaIcons";
import { ISocialIcons } from "./interfaces/social-icons.interface";
import { IContactInfo } from "./interfaces/contact-info.interface";

const Footer: React.FC = () => {
  const icons: ISocialIcons[] = [
    {
      icon: "facebook",
      link: "#",
      src: "/assets/icons/facebook.png",
      alt: "Facebook",
    },
    {
      icon: "instagram",
      link: "#",
      src: "/assets/icons/instagram.png",
      alt: "Instagram",
    },
    {
      icon: "twitter",
      link: "#",
      src: "/assets/icons/twitter.png",
      alt: "Twitter",
    },
    {
      icon: "youtube",
      link: "#",
      src: "/assets/icons/youtube.png",
      alt: "YouTube",
    },
  ];

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
      link: "tel:+576067417700",
      text: "+57 606 7417700",
    },
    {
      icon: (
        <HiOutlineMailOpen className="bg-[red] text-[40px] m-[10px] p-[5px] rounded-[50px]" />
      ),
      link: "mailto:contactenos@usaid.gov.co",
      text: "contactenos@usaid.gov.co",
    },
  ];

  return (
    <footer className="bg-[#0b3d91] text-[white] p-[20px] text-center mt-auto">
      <div className="max-w-[1200px] mx-auto  flex md:flex-row flex-col justify-center items-center">
        <div className="w-[90%]">
          <p className="text-left w-[90%] m-[10px] p-[5px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy enim ad minim veniam, quis nostrud exerci tation.
          </p>
          <div>
            <ContactInfo contactData={contactData} />
          </div>
        </div>
        <div className="flex items-end mt-[10px]  md:mt-auto">
          <SocialMediaIcons icons={icons} />
        </div>
      </div>
      <div className="mt-[20px]">
        <hr className="border-[0] h-px max-w-[1200px] bg-[#cacaca] mt-[0] mx-[auto] mb-[10px]" />
        <p className="m-0 text-[12px] text-[#cacaca]">
          © Todos los derechos reservados 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
