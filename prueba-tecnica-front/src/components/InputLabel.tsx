import Image from 'next/image'
import HelpIcon from '../../public/assets/Help-Icon.svg'


export default function InputLabel() {
    return (
        <div className='bg-white flex items-center rounded-lg border border-[#D0D5DD] py-3 px-[14px] gap-2 lg:gap-[6px]'>
            <input type="text" className='w-full' placeholder="Enter your email" />
            <span>
                <Image src={HelpIcon} alt='help' />
            </span>
        </div>
    )
}