import Image from "next/image";

interface DownloadButtonProps {
    data:{
        icon : string;
        suportText: string;
        tittle: string;
    }
}

export default function DownloadButton({data}: DownloadButtonProps) {
    return (
        <button className="w-2/5 flex items-center gap-2 bg-black border border-[#A6A6A6] rounded-[7px] py-1 px-2 lg:w-full">
            <Image className="w-1/5" src={data.icon} alt="apple" />
            <div className="flex flex-col items-start">
                <p className="text-[10px] text-white lg:text-[8px]">{data.suportText}</p>
                <p className="text-white lg:text-xs">{data.tittle}</p>
            </div>
        </button>
    )
}