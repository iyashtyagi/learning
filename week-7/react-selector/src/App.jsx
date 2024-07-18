import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

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