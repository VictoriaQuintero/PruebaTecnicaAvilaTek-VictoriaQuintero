interface CTAProps{
    content : string;
}

export default function CTAButton({content}:CTAProps) {
    return (

        <button className="bg-purple-secondary border border-purple-secondary h-fit py-3 px-[18px] rounded-lg text-white font-semibold">
            {content}
        </button>

    )
}