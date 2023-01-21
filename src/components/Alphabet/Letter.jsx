function Letter({ letter, isUsed, onClick}) {
    function onLetterClick() {
        if (isUsed) return;
        onClick(letter)
    }

    const baseClasses = "w-16 h-10 flex items-center justify-center text-lg bg-gray-200 hover:bg-gray-400 cursor-pointer"
    const usedClasses = isUsed ? "invisible" : ""
    return(
        <div className={baseClasses + " " + usedClasses} onClick={onLetterClick}>
            {letter}
        </div>
    )
}

export default Letter