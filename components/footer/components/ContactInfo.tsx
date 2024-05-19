import React from 'react';
import { IContactInfo } from '../interfaces/contact-info.interface';


const ContactInfo: React.FC<{ contactData: IContactInfo[] }> = ({ contactData }) => (
    <>
        {
            contactData.map((contact: IContactInfo) => (
                <div className='flex items-center mt-[4px]' key={contact.text}>
                    {contact.icon}
                    <a href={contact.link} target="_blank" rel="noopener noreferrer" aria-label={contact.text}>{contact.text}</a>
                </div>
            ))
        }
    </>

);

export default ContactInfo;