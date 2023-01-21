import { useEffect, useRef } from "react"

function Drawing({ word, attempts }) {
    const canvas = useRef(null)

    function drawHead() {
        const ctx = canvas.current.getContext("2d");
        const x = canvas.current.width / 2
        ctx.beginPath();
        ctx.arc(x, 22, 20, 0, 2 * Math.PI);
        ctx.stroke();
    }

    function drawBody() {
        const ctx = canvas.current.getContext("2d");
        const x = canvas.current.width / 2
        ctx.fillRect(x, 42, 2, 50);
    }

    function drawLeftLeg() {
        const ctx = canvas.current.getContext("2d");
        const x = canvas.current.width / 2
        ctx.moveTo(x + 1, 91);
        ctx.lineTo(x - 20, 130);
        ctx.stroke();
    }

    function drawRightLeg() {
        const ctx = canvas.current.getContext("2d");
        const x = canvas.current.width / 2
        ctx.moveTo(x + 1, 91);
        ctx.lineTo(x + 20, 130);
        ctx.stroke();
    }

    function drawLeftArm() {
        const ctx = canvas.current.getContext("2d");
        const x = canvas.current.width / 2
        ctx.moveTo(x + 1, 62);
        ctx.lineTo(x - 30, 50);
        ctx.stroke();
    }

    function drawRightArm() {
        const ctx = canvas.current.getContext("2d");
        const x = canvas.current.width / 2
        ctx.moveTo(x + 1, 62);
        ctx.lineTo(x + 30, 50);
        ctx.stroke();
    }

    useEffect(() => {
        const failedAttempts = attempts.filter( chr => !word.split("").includes(chr) )
        switch(failedAttempts.length) {
            case 1:
                drawHead()
                break;
            case 2:
                drawBody()
                break;
            case 3:
                drawLeftArm()
                break;
            case 4:
                drawRightArm()
                break;
            case 5:
                drawLeftLeg()
                break;
            case 6:
                drawRightLeg()
                break;

        }
        
    }, [attempts])

    return (
        <canvas className="w-full h-64" ref={canvas}>

        </canvas>
    )
}

export default Drawing