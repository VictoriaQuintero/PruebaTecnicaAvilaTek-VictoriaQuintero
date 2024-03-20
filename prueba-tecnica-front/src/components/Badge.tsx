interface BadgeProps{
    tittle : string;
}

export default function Badge({tittle} : BadgeProps) {
    return (
        <div className="bg-[#F9F5FF] border border-[#E9D7FE] text-sm text-[#6941C6] w-fit h-fit py-[2px] px-[10px] rounded-full lg:py-1 lg:px-3">
            {tittle}
        </div>
    )
}