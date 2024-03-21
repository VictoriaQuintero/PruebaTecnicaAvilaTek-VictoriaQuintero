import Image from "next/image"
import DownloadButton from "./DownloadButton"
import logo from '../../public/assets/Logo.svg'
import { dataButtons, Footerlinks } from "../../public/assets/constants/const"

export default function Footer() {
    return (
        <div className="flex flex-col gap-12 py-12 lg:flex lg:flex-col lg:items-center lg:pt-16 lg:pb-12">
            <div className="flex flex-col gap-12 lg:w-[90%] lg:flex-row-reverse lg:gap-16 lg:justify-between">
                <div className="flex flex-col gap-4 px-4 lg:w-1/5 lg:items-start">
                    <p className="text-sm text-black-primary font-semibold">Get the app</p>
                    <div className="flex gap-4 lg:flex-col lg:w-full lg:items-end">
                        {/* botones de apple y playstore */}
                        {dataButtons.map((data) => (
                            <DownloadButton key={data.tittle} data={data}/>
                        ))}
                    </div>
                </div>

                <div className="px-4 lg:w-full">
                    <div className="flex gap-8">
                        {/* links del footer */}
                        {
                            Footerlinks.map((links) => (
                                <div key={links.tittle} className="w-1/2 flex flex-col gap-4 lg:w-auto">
                                    <h3 className="text-sm font-semibold">{links.tittle}</h3>
                                    <div className="flex flex-col gap-3">
                                        {links.links.map((link) => (
                                            <div key={link.name} className="flex gap-2 items-center">
                                                <p className="text-purple-tertiary font-semibold">{link.name}</p>
                                                <div className={`${link.new === false && 'hidden'} border border-purple-tertiary text-sm text-purple-tertiary w-fit h-fit py-[2px] px-[10px] rounded-full lg:py-1 lg:px-3`}>
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