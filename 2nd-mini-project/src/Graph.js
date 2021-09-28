import React,{useRef, useState, useEffect} from "react";

const Graph = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [ctx, setCtx] = useState();

    useEffect(() => {
        const canvas = canvasRef.current;

        const context = canvas.getContext('2d');
        contextRef.current = context;
        setCtx(contextRef.current);
    }, []);

    console.log("contextRef :", ctx);

    return (
        <canvas width="600" height="600" ref={canvasRef}></canvas>
    );
};

export default Graph;