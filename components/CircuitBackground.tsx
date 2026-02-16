export default function CircuitBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
            <div className="absolute inset-0 bg-blueprint bg-[length:50px_50px]" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-heist-black opacity-80" />
        </div>
    )
}
