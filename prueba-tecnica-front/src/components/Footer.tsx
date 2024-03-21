import Image from "next/image"

import apple from '../../public/assets/apple.svg'
import playstore from '../../public/assets/playstore.svg'
import logo from '../../public/assets/Logo.svg'

export default function Footer() {

    const Footerlinks = [
        {
            tittle: 'Product',
            links: [
                {
                    name: 'Overview',
                    new: false
                },
                {
                    name: 'Features',
                    new: false
                },
                {
                    name: 'Solutions',
                    new: true
                },
                {
                    name: 'Tutorials',
                    new: false
                },
                {
                    name: 'Pricing',
                    new: false
                },
                {
                    name: 'Relases',
                    new: false
                },
            ]
        },
        {
            tittle: 'Company',
            links: [
                {
                    name: 'About us',
                    new: false
                },
                {
                    name: 'Careers',
                    new: false
                },
                {
                    name: 'Press',
                    new: false
                },
                {
                    name: 'News',
                    new: false
                },
                {
                    name: 'Media kit',
                    new: false
                },
                {
                    name: 'Contact',
                    new: false
                },
            ]
        },
    ]

    return (
        <div className="flex flex-col gap-12 py-12 lg:flex lg:flex-col lg:items-center lg:pt-16 lg:pb-12">
            <div className="flex flex-col gap-12 lg:w-[90%] lg:flex-row-reverse lg:gap-16 lg:justify-between">
                <div className="flex flex-col gap-4 px-4 lg:w-1/5 lg:items-start">
                    <p className="text-sm text-[#101828] font-semibold">Get the app</p>
                    <div className="flex gap-4 lg:flex-col lg:w-full lg:items-end">
                        <button className="w-2/5 flex items-center gap-2 bg-black border border-[#A6A6A6] rounded-[7px] py-1 px-2 lg:w-full">
                            <Image className="w-1/5" src={apple} alt="apple" />
                            <div className="flex flex-col items-start">
                                <p className="text-[10px] text-white lg:text-[8px]">Download on the</p>
                                <p className="text-white lg:text-xs">App Store</p>
                            </div>
                        </button>
                        <button className="w-2/5 flex items-center gap-2 bg-black border border-[#A6A6A6] rounded-[7px] py-1 px-2 lg:w-full">
                            <Image className="w-1/5" src={playstore} alt="apple" />
                            <div className="flex flex-col items-start">
                                <p className="text-[10px] text-white lg:text-[8px]">Get it on</p>
                                <p className="text-white lg:text-xs">Google Play</p>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="px-4 lg:w-full">
                    <div className="flex gap-8">
                        {
                            Footerlinks.map((links) => (
                                <div key={links.tittle} className="w-1/2 flex flex-col gap-4 lg:w-auto">
                                    <h3 className="text-sm font-semibold">{links.tittle}</h3>
                                    <div className="flex flex-col gap-3">
                                        {links.links.map((link) => (
                                            <div key={link.name} className="flex gap-2 items-center">
                                                <p className="text-[#6941C6] font-semibold">{link.name}</p>
                                                <div className={`${link.new === false && 'hidden'} border border-[#6941C6] text-sm text-[#6941C6] w-fit h-fit py-[2px] px-[10px] rounded-full lg:py-1 lg:px-3`}>
                                                    New
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

            <div className="px-4 lg:w-[90%]">
                <div className="border-t border-[#EAECF0] flex flex-col gap-6 pt-8 lg:flex-row lg:justify-between">
                    <Image src={logo} alt="logo" />
                    <p className="text-[#667085]">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>

        </div>
    )
}