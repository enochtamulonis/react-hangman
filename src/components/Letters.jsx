import { useRef } from "react"

function Letters({ word, attempts }) {
    const chars = useRef(word.split(""))
    return (
        <div className="w-full flex flex-wrap justify-center gap-3">            
            {chars.current.map((chr, idx) => 
                <div key={idx} className="w-16 h-14 border-b-2 border-gray-700 flex justify-center items-center text-2xl">
                    { attempts.includes(chr) && chr }
                </div>
            )}
        </div>
    )
}

export default Letters