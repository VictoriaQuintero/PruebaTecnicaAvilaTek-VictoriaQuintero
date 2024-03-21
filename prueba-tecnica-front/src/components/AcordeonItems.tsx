import Image from 'next/image';
import Plus from '../../public/assets/Plus.svg';
import close from '../../public/assets/close.svg'
import { useState } from 'react';

interface AcordeonItemsProps {
    question: {
        tittle: string;
        response: string;
    };
    index: number;
}

export default function AcordeonItems({ question, index }: AcordeonItemsProps) {

    const [open, setOpen] = useState(false)
    return (
        <details key={question.tittle} className={`flex flex-col gap-2 ${index > 0 && 'pt-6 border-t border-[#EAECF0]'}`} >
            <summary className="cursor-pointer list-none flex items-center justify-between gap-2 text-black-primary text-lg font-medium lg:gap-6" onClick={() => setOpen(!open)}>
                {question.tittle}
                <span>
                    <Image src={open ? close : Plus} alt='plus' />
                </span>
            </summary>
            <div className='pt-4'>
                <p className='text-text-secondary'>{question.response} </p>
            </div>
        </details>
    )
}