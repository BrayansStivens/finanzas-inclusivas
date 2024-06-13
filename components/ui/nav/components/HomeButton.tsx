interface HomeButtonProps {
  onClick: () => void;
}

const HomeButton: React.FC<HomeButtonProps> = ({ onClick }) => (
  <button
    className="bg-transparent border-4 border-[#102e6a] w-full lg:w-3/12 p-1 cursor-pointer"
    onClick={onClick}
  >
    <p className="w-full bg-[#102e6a] py-2 font-semibold text-[#fff] text-base md:text-lg caret-transparent">
      Ingresar Sin Sector
    </p>
  </button>
);

export default HomeButton;
