import { AmountPendingCard } from "./components/AmountPendingCard";
import { AmountProcessedCard } from "./components/AmountProcessedCard";

export default function App(){
    return(
        <div className="">
            <div  className="grid grid-cols-4">
                <AmountPendingCard amount={"92,312.20"} orders={13}/>
                <AmountProcessedCard amount={"23,92,312.19"} />
            </div>
        </div>
    )
}
