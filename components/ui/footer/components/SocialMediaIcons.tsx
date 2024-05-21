import Image from 'next/image'
import React from 'react'
import { ISocialIcons } from '../interfaces/social-icons.interface'

const SocialMediaIcons: React.FC<{ icons: ISocialIcons[] }> = ({ icons }) => {

    return (
        <>
            {
                icons.map((icon: ISocialIcons) => (
                    <a href={icon.link} key={`${icon.alt}${icon.src}`} target='_blank' className='mx-[10px] my-[0]'>
                        <Image src={icon.src} className='object-cover max-w-[50px] max-h-[50px] rounded-[50px]' width={50} height={50} alt={icon.alt} />
                    </a>
                ))

            }
        </>
    )
}

export default SocialMediaIcons
