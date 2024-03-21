// componentes
import Badge from './Badge'
import Features from './Features'

// items features
import { featuresIntegration } from '../../public/assets/constants/const'

export default function IntegrationSection() {

    return (
        <div className="flex flex-col pb-24 gap-16 lg:items-center">

            <div className="container px-4 flex flex-col gap-4 lg:w-3/4 lg:px-8 lg:gap-5">
                <div className="flex flex-col items-center gap-4">
                    <Badge tittle={'Integration'} />
                    <h1 className="text-[#101828] text-3xl font-semibold text-center lg:text-4xl">Get more value from your tools</h1>
                </div>
                <p className="text-[#475467] text-lg text-center lg:text-xl">
                    Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away.
                </p>
            </div>

            <Features features={featuresIntegration} /> 

        </div>
    )
}