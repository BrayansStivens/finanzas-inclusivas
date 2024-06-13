import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import AuthButton from "./AuthButton";
import HomeButton from "./HomeButton";

interface MobileMenuProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  showAuthButton: boolean;
  handleAuth: () => void;
  handleHome: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuOpen,
  toggleMenu,
  showAuthButton,
  handleAuth,
  handleHome,
}) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "overlay") {
      toggleMenu();
    }
  };

  return (
    <div
      id="overlay"
      className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${
        menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-[#2a63b1] h-[40px] w-full" />
        <div className="p-4 flex justify-between items-center border-b">
          <Image
            src="/assets/logo/icon.svg"
            alt="icono para móviles"
            width={50}
            height={50}
            priority
            className="w-auto h-auto"
          />
          <button onClick={toggleMenu} className="focus:outline-none">
            <AiOutlineClose className="w-6 h-6" />
          </button>
        </div>
        {showAuthButton && (
          <div className="p-4 flex flex-col space-y-4">
            <AuthButton onClick={handleAuth} />
            {/* <HomeButton onClick={handleHome} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
