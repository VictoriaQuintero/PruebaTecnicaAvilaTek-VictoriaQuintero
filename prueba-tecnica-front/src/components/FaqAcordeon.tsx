"use client";

import Image from 'next/image';
import Plus from '../../public/assets/Plus.svg';
import close from '../../public/assets/close.svg'
import { useState } from 'react';

interface FaqAcordeonProps {
    Questions: {
        tittle: string;
        response: string;
        close: boolean;
    }[]
}
export default function FaqAcordeon({ Questions }: FaqAcordeonProps) {

    const [questionList, setQuestionList] = useState(Questions)

    const closeQuestion = (id: number) => {
        const questions = [...Questions];
        questions[id] = { ...questions[id], close: !close };
        setQuestionList(questions);
    }
    return (
        <div className='flex flex-col gap-8 lg:w-2/3'>
            {questionList.map((question, index) => (
                <details key={question.tittle} className={`flex flex-col gap-2 ${index > 0 && 'pt-6 border-t border-[#EAECF0]'}`} >
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-2 text-[#101828] text-lg font-medium lg:gap-6" onClick={() => closeQuestion(index)}>
                        {question.tittle}
                        <span>
                            <Image src={question.close ? Plus : close} alt='plus' />
                        </span>
                    </summary>
                    <div className='pt-4'>
                        <p className='text-[#475467]'>{question.response} </p>
                    </div>
                </details>
            ))}
        </div>
    )
};


