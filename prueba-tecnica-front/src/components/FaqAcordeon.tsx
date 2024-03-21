"use client";
import { useEffect, useState } from 'react';
import AcordeonItems from './AcordeonItems';

interface FaqAcordeonProps {
    Questions: {
        tittle: string;
        response: string;
    }[]
}
export default function FaqAcordeon({ Questions }: FaqAcordeonProps) {

    const [questionList, setQuestionList] = useState(Questions)

    return (
        <div className='flex flex-col gap-8 lg:w-2/3'>
            {questionList.map((question, index) => (
                <AcordeonItems key={question.tittle} question={question} index={index} />
            ))}
        </div>
    )
};


