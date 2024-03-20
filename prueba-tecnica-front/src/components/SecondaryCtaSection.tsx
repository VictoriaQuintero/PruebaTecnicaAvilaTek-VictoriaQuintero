import Image from "next/image"
import CTAButton from "./CTAButton"
import SeeMoreButton from "./SeeMoreButton"
import cta1 from '../../public/assets/cta-img-1.jpg'
import cta2 from '../../public/assets/cta-imagen-2.jpg'
import cta3 from '../../public/assets/cta-imagen-3.png'
import cta4 from '../../public/assets/cta-imagen-4.jpg'
import cta5 from '../../public/assets/cta-imagen-5.jpg'

export default function SecondaryCtaSection(){
    return(
        <div className="bg-[#F9FAFB] flex flex-col gap-16 py-16 lg:flex-row lg:py-24 lg:justify-center">
            <div className="px-4 lg:flex lg:items-center lg:pl-8 lg:pr-0 lg:w-1/2">
                <div className="flex flex-col gap-8 lg:gap-12">
                    <div className="flex flex-col gap-4 lg:gap-6">
                        <h1 className="text-[#101828] text-3xl font-semibold lg:text-5xl">No long-term <br className="lg:hidden" /> contracts. No catches.</h1>
                        <h2 className="text-[#475467] text-lg lg:text-xl">Start your 30-day free trial today.</h2>
                    </div>
                    <div className="flex flex-col gap-3 lg:flex-row-reverse lg:justify-end">
                        <CTAButton content="Get started" />
                        <SeeMoreButton />
                    </div>
                </div>
            </div>
            <div className="px-4 lg:pr-8 lg:pl-0 lg:w-2/5">
                <div className="flex flex-col gap-2 px-[7px] lg:flex-row lg:flex-wrap  lg:justify-center">
                    <Image className="w-full h-[160px] object-cover lg:w-1/3 self-end" src={cta1} alt="image" />
                    <Image className="w-full h-[160px] object-cover lg:w-1/3 self-end" src={cta2} alt="image" />
                    <Image className="w-full h-[160px] object-cover lg:w-1/3 lg:h-fit" src={cta3} alt="image" />
                    <Image className="w-full h-[160px] object-cover lg:w-1/4" src={cta4} alt="image" />
                    <Image className="w-full h-[160px] object-cover lg:w-1/3 lg:h-fit" src={cta5} alt="image" /> 
                </div>
            </div>
        </div>
    )
}