
'use client';
import SectorCard from '@/components/ui/sectorCard';
import React, { useState } from 'react';


const AuthSectorCard: React.FC<{ financial: string[], otherEntities: [], solidarity: string[] }> = ({ financial, otherEntities, solidarity }) => {
    const [isOpen, setIsOpen] = useState({ financial: false, solidarity: false, otherEntities: false });

    const toggleOpen = (key: keyof typeof isOpen) => {
        setIsOpen(prevState => {
            const newState = Object.keys(prevState).reduce((acc, currKey) => {
                acc[currKey as keyof typeof isOpen] = currKey === key ? !prevState[currKey as keyof typeof isOpen] : false;
                return acc;
            }, {} as { [K in keyof typeof prevState]: boolean });

            return newState;
        });
    };


    return (
        <>
            <h1 className='bg-[#2B6595] p-[25px] mt-[0] mx-[20px] mb-[30px] text-[25px] text-center text-[white] font-bold '>Le solicitamos seleccionar el sector al que pertenece y la entidad asociada

                a dicho sector, con el fin de recopilar estadísticas sobre el uso de la

                herramienta. Si lo prefiere, puede omitir este paso y acceder directamente

                a los módulos de la herramienta.</h1>
            <div className='flex flex-wrap mt-[0] mx-[20px] mb-[50px] justify-center gap-[30px]'>
                <SectorCard
                    imageSrc="/assets/images/financial_sector.jpg"
                    sectorName="Sector Financiero"
                    toggleOpen={() => toggleOpen('financial')}
                    isOpen={isOpen.financial}
                    items={financial}
                />
                <SectorCard
                    imageSrc="/assets/images/solidarity_sector.jpg"
                    sectorName="Sector Solidario"
                    isOpen={isOpen.solidarity}
                    toggleOpen={() => toggleOpen('solidarity')}
                    items={otherEntities}
                />
                <SectorCard
                    imageSrc="/assets/images/other_entities.webp"
                    sectorName="Otras Entidades"
                    isOpen={isOpen.otherEntities}
                    toggleOpen={() => toggleOpen('otherEntities')}
                    items={solidarity}
                />
            </div>
        </>
    );
};

export default AuthSectorCard;
