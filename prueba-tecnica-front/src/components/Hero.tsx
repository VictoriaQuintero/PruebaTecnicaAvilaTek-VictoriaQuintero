import Image from "next/image"
import InputLabel from "./InputLabel"
import Link from "next/link"
import graficosHeroRes from '../../public/assets/graficosHero-Responsive.svg'
import graficosHero from '../../public/assets/graficosHero.svg'

import CTAButton from "./CTAButton"

export default function Hero() {
    return (
        <div className="pb-16 lg:pt-8 lg:px-8 lg:flex lg:flex-col lg:items-center">
            <div className="bg-bg-purple px-4 lg:w-[90%] lg:rounded-3xl lg:px-8 lg:pt-24 lg:pb-48 lg:flex lg:flex-col lg:items-center">
                <div className="pt-16 pb-24 flex flex-col gap-10 lg:gap-12 lg:w-3/4 lg:p-0">
                    <div className="flex flex-col gap-4 lg:gap-6">
                        <h1 className="text-white text-4xl font-semibold text-center lg:text-7xl">Grow your users. <span className="text-white-secondary">Smarter.</span></h1>
                        <p className="text-white-secondary text-lg text-center lg:text-xl">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                    </div>
                    <form className="flex flex-col gap-4 lg:flex-row lg:justify-center">
                        <div>
                            <InputLabel />
                            <p className="text-sm text-white-secondary">We care about your data in our <Link href={'/'} className="underline">privacy policy</Link>.</p>
                        </div>
                        <CTAButton content="Get started" />
                    </form>
                </div>
            </div>
            <div className="-mt-10 lg:w-3/4 lg:-mt-24">
                {/* aqui va la imagen grafico */}
                <Image className="w-full hidden lg:block" src={graficosHero} alt="graficos" />
                <Image className="w-full lg:hidden" src={graficosHeroRes} alt="graficos" />
            </div>
        </div>
    )
}