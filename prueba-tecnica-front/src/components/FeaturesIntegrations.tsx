import Image from "next/image";

import Arrow from '../../public/assets/arrow.svg'

interface FeaturesIntegrationsProps {
    features: {
        icon: string;
        tittle: string;
        description: string,
        button: string
    }[]
}

export default function FeaturesIntegrations({ features }: FeaturesIntegrationsProps) {
    return (
        <div className='flex flex-col px-4 gap-10 lg:w-11/12 lg:grid lg:grid-cols-3 lg:px-8 lg:gap-8'>
            {features.map((feature) => (
                <div key={feature.tittle} className='flex flex-col items-center gap-4'>
                    <Image src={feature.icon} alt='notion' />
                    <div className='flex flex-col items-center gap-4 lg:gap-5'>
                        <div className='flex flex-col items-center gap-1 lg:gap-2'>
                            <h3 className='text-[#101828] text-lg font-semibold text-center lg:text-xl'>{feature.tittle}</h3>
                            <p className='text-[#475467] text-center font-normal px-3 lg:p-0'>{feature.description}</p>
                        </div>
                        <p className='text-[#6941C6] font-semibold flex gap-2 items-center'>
                            View integration
                            <span>
                                <Image src={Arrow} alt='View integration' />
                            </span>
                        </p>
                    </div> 
                </div>
            ))}

        </div>
    )
}