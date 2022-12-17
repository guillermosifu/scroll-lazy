import {lazy,Suspense} from "react";

const Componente = lazy(()=>import("../Components/Componente"));

export const DragonBall =()=>{
    return(
        <>
        <Suspense fallback={<div>Loading...</div>}>
            <Componente/>
        </Suspense>
        </>
    )
};