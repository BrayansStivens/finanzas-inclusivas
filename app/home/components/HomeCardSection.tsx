"use client";

import { useRouter } from "next/navigation";
import HomeCard from "./HomeCard";
import { useState } from "react";

function HomeCardSection({ cards }: any) {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (selectedCard === index) {
      setSelectedCard(null);
    } else {
      setSelectedCard(index);
      router.push(`${cards[index].route}`);
    }
  };

  return (
    <section id="cards">
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-24">
          {cards.map((card: any, index: number) => (
            <HomeCard
              key={index}
              index={index}
              src={card.src}
              text={card.text}
              width={card.width}
              height={card.height}
              isSelected={selectedCard === index}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeCardSection;
