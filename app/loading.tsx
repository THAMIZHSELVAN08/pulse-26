export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-heist-black text-heist-red">
            <div className="flex flex-col items-center gap-6">
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-4 border-heist-red/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-heist-red border-t-transparent rounded-full animate-spin" />
                    <div className="absolute inset-4 border-4 border-heist-gold/20 rounded-full" />
                    <div className="absolute inset-4 border-4 border-heist-gold border-b-transparent rounded-full animate-spin-slow" />
                </div>
                <p className="font-display text-xl tracking-[0.3em] animate-pulse text-heist-silver">
                    ESTABLISHING SECURE CONNECTION...
                </p>
            </div>
        </div>
    )
}
