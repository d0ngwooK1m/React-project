import React,{useRef, useState, useEffect} from "react";

const Graph = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [ctx, setCtx] = useState();
    const [num1, changeNum1] = useState(50);


    useEffect(() => {
        const canvas = canvasRef.current;

        const ctx = canvas.getContext('2d');
        contextRef.current = ctx;
        setCtx(contextRef.current);

        const drawHexagon = (x, y) => {
            const a = 2 * Math.PI / 6;
            const r = 100;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
            }
            ctx.closePath();
            ctx.stroke();
            console.log(ctx);
        };
        drawHexagon(100, 100);

        const drawGraph = (r) => {
            const a = 2 * Math.PI / 6;
            const x = 100;
            const y = 100;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
            }
            ctx.closePath();
            ctx.stroke();
            console.log(ctx);
        };
        drawGraph(num1);

    }, [num1]);
    
    console.log("contextRef :", ctx);

    return (
        <div>
            <canvas width="600" height="600" ref={canvasRef}></canvas>
            <button onClick={() => {
                changeNum1(num1 + 10);
                console.log(num1);
                if (num1 === 100) return; 
            }}
            >+</button>
            <button onClick={() => {
                changeNum1(num1 - 10);
                console.log(num1);
                if (num1 === 0) return; 
            }}
            >-</button>
        </div>
    );
};

export default Graph;