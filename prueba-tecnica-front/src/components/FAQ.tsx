import FaqAcordeon from "./FaqAcordeon"



export default function FAQ() {

    const questions = [
        {
            tittle: 'Is there a free trial available?',
            response: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
            close : true
        },
        {
            tittle: 'Can I change my plan later?',
            response: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
            close : true
        },
        {
            tittle: 'What is your cancellation policy?',
            response: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
            close : true
        },
        {
            tittle: 'Can other info be added to an invoice?',
            response: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
            close : true
        },
        {
            tittle: 'How does billing work?',
            response: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
            close : true
        },
        {
            tittle: 'How do I change my account email?',
            response: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
            close : true
        },
        
    ]


    return (
        <div className="flex flex-col gap-12 pb-16 lg:py-24 lg:items-center">
            <div className="flex flex-col gap-4 px-4 lg:w-2/3 lg:px-8 lg:p-5 ">
                <h1 className="text-[#101828] text-3xl font-semibold text-center lg:text-4xl">
                    Frequently asked questions
                </h1>
                <p className="text-[#475467] text-lg text-center lg:text-xl">
                    Everything you need to know about the product and billing.
                </p>
            </div>
            <div className="px-4 lg:w-full lg:flex lg:justify-center">
            <FaqAcordeon Questions={questions} />

            </div>

        </div>
    )
}