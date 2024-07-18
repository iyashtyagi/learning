import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import { useMemo } from "react";

export default function App(){
    return(
        <div>
            <RecoilRoot>
                <Count/>
            </RecoilRoot>
        </div>
    )
}

function Count() {
    return(
        <div>
            <CountRender/>
            <Buttons/>
            <EvenCountRender/>
        </div>
    )
}

function CountRender(){
    const count = useRecoilValue(countAtom);
    return (
        <div>
            <b>
                {count}
            </b>
        </div>
    )
}

function Buttons(){
    const setCount = useSetRecoilState(countAtom);

    return(
        <div>
            <button onClick={()=>{setCount((count) => count - 1)}}>Decrease</button>
            <button onClick={()=>{setCount((count) => count + 1)}}>Increase</button>
        </div>
    )
}

// unoptimised way of doing it
// function EvenCountRender(){
//     const count = useRecoilValue(countAtom);
//     return(
//         <div>
//             {count%2==0?"It is even":null}
//         </div>
//     )
// }

// Optimised way of doing it
function EvenCountRender(){
    const count = useRecoilValue(countAtom);

    const isEven = useMemo(()=>{
        return count%2==0;
    },[count])

    return(
        <div>
            {isEven?"It is even":null}
        </div>
    )
}