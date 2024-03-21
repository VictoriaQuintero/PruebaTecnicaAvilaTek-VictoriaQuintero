import Image from "next/image"
import testimonio from '../../public/assets/testimonio-img.svg'
import stars from '../../public/assets/stars.svg'

export default function TestimonialSection() {
    return (
        <div className="py-16 lg:py-0 lg:pb-24 lg:flex lg:justify-center">
            <div className="px-4 lg:px-8 lg:w-[90%]">
                <div className="bg-[#53389E] rounded-2xl overflow-hidden lg:flex lg:justify-between lg:items-center lg:rounded-3xl lg:shadow-xl lg:h-[420px]">
                    <Image className="w-full lg:w-2/5 h-full lg:object-cover lg:h-[420px]" src={testimonio} alt="Testimonio" />
                    <div className="flex flex-col gap-8 pt-10 px-6 pb-12 lg:p-16 lg:gap-8">
                        <div className="flex flex-col gap-4 lg:gap-6">
                            <Image src={stars} alt="stars" />
                            <p className="text-white text-2xl font-medium lg:text-4xl">Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-white text-lg font-semibold">— Renee Wells</h2>
                            <p className="text-[#E9D7FE]">Product Designer, Quotient</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}