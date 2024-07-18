import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

export default function App(){
    return (
        <>
            <RecoilRoot>
                <Count/>
            </RecoilRoot>
        </>
    )
}

function Count(){

    return(
        <>
            <CountRender/>
            <Buttons/>
        </>
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

    const [count, setCount] = useRecoilState(countAtom);
    return(
        <div>
            <button onClick={()=>{setCount(count + 1)}}>Increase</button>
            <button onClick={()=> {setCount(count - 1)}}>Decrease</button>
        </div>
    )
}