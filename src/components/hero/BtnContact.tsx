export function BtnContact() {
    const handleClick = () => {
        document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <button onClick={handleClick} className="w-[45%] lg:w-[30%] h-12 whitespace-nowrap bg-[#00ff88] text-black font-bold text-[15px] text-center font-[family-name:var(--font-body)] rounded-md transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,255,136,0.5)] hover:-translate-y-0.5 active:translate-y-0">
            ./contact.sh
        </button>
    )
}