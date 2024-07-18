import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";

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
    const count = useRecoilState("countAtom");
    return (
        <div>
            <b>
                {count}
            </b>
        </div>
    )
}

function Buttons(){
    const setCount = useSetRecoilState("countAtom");

    return(
        <div>
            <button onClick={()=>{setCount((count) => count - 1)}}>Decrease</button>
            <button onClick={()=>{setCount((count) => {count + 1})}}>Increase</button>
        </div>
    )
}