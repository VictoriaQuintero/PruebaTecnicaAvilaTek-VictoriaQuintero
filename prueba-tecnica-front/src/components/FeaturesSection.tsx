import Features from "./Features"
import Badge from "./Badge"

// items features
import { featuresSection } from "../../public/assets/constants/const"

export default function FeatureSection() {
    return (
        <div className="flex flex-col gap-12 py-16 lg:pb-24 lg:pt-0 lg:items-center">
            <div className="flex flex-col gap-4 px-4 lg:w-3/4 lg:px-8 lg:gap-5">
                <div className="flex flex-col gap-4 items-center">
                    <Badge tittle="Features" />
                    <h1 className="text-[#101828] text-3xl font-semibold text-center lg:9">
                        Cutting-edge features for advanced analytics
                    </h1>
                </div>
                <p className="text-[#475467] text-lg text-center lg:text-xl">
                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </p>
            </div>
            <Features features={featuresSection} />
        </div>
    )
}