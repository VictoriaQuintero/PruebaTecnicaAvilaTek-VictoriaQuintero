import Image from "next/image"
import CTAButton from "./CTAButton"
import SeeMoreButton from "./SeeMoreButton"

import ctaImage from "../../public/assets/CTA-image.svg"

export default function CTASection() {
    return (
        <div className="py-16 lg:py-0 lg:pb-24 lg:flex lg:justify-center">
            <div className="px-4 lg:px-8 lg:w-[90%]">
                <div className="bg-bg-purple rounded-2xl overflow-hidden  lg:flex lg:justify-between lg:items-center lg:rounded-3xl lg:shadow-xl">
                    <div className="flex flex-col gap-8 pt-10 px-6 pb-12 lg:p-16 lg:gap-12">
                        <div className="flex flex-col gap-4 lg:gap-5">
                            <h1 className="text-white text-3xl font-semibold lg:text-4xl">Give us a shot</h1>
                            <p className="text-lg text-white-secondary lg:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                        </div>
                        <div className="flex flex-col gap-3 lg:flex-row-reverse lg:justify-end">
                            <CTAButton content="Get started" />
                            <SeeMoreButton />
                        </div>
                    </div>
                    <Image className="w-full lg:w-2/5 h-full" src={ctaImage} alt="join us" />
                </div>
            </div>
        </div>
    )
}