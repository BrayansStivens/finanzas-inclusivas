interface AuthButtonProps {
  onClick: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ onClick }) => (
  <button
    className="bg-transparent border-4 border-[#102e6a] w-full lg:w-3/12 p-1 cursor-pointer"
    onClick={onClick}
  >
    <p className="w-full bg-[#102e6a] py-2 font-semibold text-[#fff] text-base md:text-lg caret-transparent">
      Seleccionar Sector
    </p>
  </button>
);

export default AuthButton;
