import React from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';




export interface CardProps {
    imageSrc: string;
    sectorName: string;
    items: string[];
    isOpen: boolean;
    toggleOpen: () => void;
}


const SectorCard: React.FC<CardProps> = ({ imageSrc, sectorName, items, toggleOpen, isOpen }) => {
    return (

        <div>
            <Image src={imageSrc} alt={sectorName} width={400} height={300} />
            <div className={`bg-[#A6C0E6] [box-shadow:inset_0px_4px_4px_rgba(0,_0,_0,_0.25)] h-[50px] p-[10px] text-center font-bold text-[18px] relative cursor-pointer ${isOpen ? '!bg-[#102E6A] text-[white]' : ""}`} onClick={toggleOpen} >
                <span>{sectorName}</span>
                <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" className={`fill-[black] absolute top-0 right-0 mt-[5px] mr-[10px] mb-[0] ml-[0] ${isOpen ? 'fill-[white]' : ''}`}>
                    <path d="M34.888 15.6463C34.8964 15.2653 34.7859 14.8912 34.5719 14.5759C34.3578 14.2607 34.0507 14.0199 33.6934 13.8872C33.3362 13.7545 32.9466 13.7364 32.5786 13.8354C32.2106 13.9343 31.8828 14.1455 31.6404 14.4395L22.0297 25.658L12.4224 14.4395C12.2729 14.2362 12.0832 14.0658 11.8648 13.9392C11.6465 13.8126 11.4042 13.7325 11.1535 13.7038C10.9027 13.6751 10.6487 13.6985 10.4074 13.7725C10.1661 13.8465 9.94261 13.9696 9.75105 14.1339C9.5595 14.2983 9.40411 14.5004 9.2943 14.7277C9.18449 14.955 9.12281 15.2025 9.11308 15.4547C9.10335 15.7069 9.14565 15.9584 9.23763 16.1935C9.3296 16.4286 9.46911 16.6421 9.64744 16.8207L20.6368 29.6648C20.8089 29.8665 21.0226 30.0285 21.2634 30.1395C21.5042 30.2506 21.7662 30.3081 22.0314 30.3081C22.2966 30.3081 22.5586 30.2506 22.7994 30.1395C23.0402 30.0285 23.2541 29.8665 23.4262 29.6648L34.4262 16.8207C34.7144 16.4963 34.8778 16.0801 34.888 15.6463Z" />
                </svg>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                        transition={{ duration: 0.3 }}
                    >
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className='bg-[#2A63B1] p-[10px] text-[18px] leading-[25px] text-center text-[white] [box-shadow:inset_0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-[400px] hover:bg-[#1A4A8C] hover:cursor-pointer'
                            >
                                {item}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

    );
};

export default SectorCard;
