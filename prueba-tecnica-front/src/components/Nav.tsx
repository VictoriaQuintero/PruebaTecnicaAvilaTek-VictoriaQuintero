import Image from "next/image"

import Logo from "../../public/assets/Logo.svg"
import Menu from "../../public/assets/Menu.svg"

import { itemsNav } from "../../public/assets/constants/const"

export default function Nav() {



    return (
        <div className="flex items-center justify-center">
            <div className="w-full flex items-center justify-between p-4 lg:px-8 lg:w-[90%]">
                <div className="flex items-center gap-10">
                    <Image src={Logo} alt="logo" />
                    <nav className="hidden lg:flex lg:items-center lg:gap-8">
                        {
                            itemsNav.map((item, index) => (
                                <p key={index} className="text-text-secondary text-base font-semibold">{item.name}</p>
                            ))
                        }
                    </nav>
                </div>
                <Image className="lg:hidden" src={Menu} alt="Menu" />
                <div className="hidden lg:flex lg:gap-3">
                    <button className="text-text-secondary text-base font-semibold py-[10px] px-4 rounded-lg">
                        Log in
                    </button>
                    <button className="bg-purple-secondary text-white text-base font-semibold py-[10px] px-4 rounded-lg">
                        Sing up
                    </button>
                </div>
            </div>
        </div>
    )
}
