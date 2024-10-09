export const MouseScroll  = () => {
    return (
        <>
            <div className="bottom-10 absolute">
                <div className="rounded-2xl border-2 w-6 h-10 relative overflow-hidden border-gray-400">
                    <div className="roll absolute top-2  left-1/2 -ml-0.5 h-1.5 rounded bg-gray-400"></div>
                    <div className="rollshadow"></div>
                </div>
            </div>
        </>
    )
}