import Image from "next/image";

function HomeCard({ src, alt, text, width, height, isSelected, onClick }: any) {
  return (
    <div
      className={`p-5 flex flex-col items-center justify-center h-full cursor-pointer transition duration-300 ease-in-out transform ${
        isSelected ? "bg-[#2b6595] text-white scale-105" : "bg-blue-200"
      }`}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt ? alt : "image"}
        width={width}
        height={height}
        className={`mb-4 transition duration-300 ease-in-out ${
          isSelected ? "invert" : ""
        }`}
      />
      <p
        className={`text-center font-bold transition duration-300 ease-in-out caret-transparent ${
          isSelected ? "text-white" : ""
        }`}
      >
        {text}
      </p>
    </div>
  );
}
//
export default HomeCard;
