import FaqAcordeon from "./FaqAcordeon"
import { questions } from "../../public/assets/constants/const"

export default function FAQ() {
    return (
        <div className="flex flex-col gap-12 pb-16 lg:py-24 lg:items-center">
            <div className="flex flex-col gap-4 px-4 lg:w-2/3 lg:px-8 lg:p-5 ">
                <h1 className="text-black-primary text-3xl font-semibold text-center lg:text-4xl">
                    Frequently asked questions
                </h1>
                <p className="text-text-secondary text-lg text-center lg:text-xl">
                    Everything you need to know about the product and billing.
                </p>
            </div>
            <div className="px-4 lg:w-full lg:flex lg:justify-center">
                <FaqAcordeon Questions={questions} />
            </div>

        </div>
    )
}