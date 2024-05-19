import Image from "next/image";

function HomeImageSection() {
  return (
    <section
      id="home_image"
      className="flex gap-2 flex-col w-full h-auto relative"
    >
      <div className="relative w-full h-0 pb-[32.4%]">
        <Image
          src="/assets/images/features_home_page.webp"
          alt="home images page"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </section>
  );
}

export default HomeImageSection;
