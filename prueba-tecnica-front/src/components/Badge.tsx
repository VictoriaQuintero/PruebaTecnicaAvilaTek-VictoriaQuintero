interface BadgeProps{
    tittle : string;
}

export default function Badge({tittle} : BadgeProps) {
    return (
        <div className="bg-[#F9F5FF] border border-white-secondary text-sm text-purple-tertiary w-fit h-fit py-[2px] px-[10px] rounded-full lg:py-1 lg:px-3">
            {tittle}
        </div>
    )
}