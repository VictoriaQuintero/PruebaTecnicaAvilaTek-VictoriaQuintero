interface CTAProps{
    content : string;
}

export default function CTAButton({content}:CTAProps) {
    return (

        <button className="bg-[#7F56D9] border border-[#7F56D9] h-fit py-3 px-[18px] rounded-lg text-white font-semibold">
            {content}
        </button>

    )
}