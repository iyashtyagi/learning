import { AmountPendingCard } from "./components/AmountPendingCard";
import { AmountProcessedCard } from "./components/AmountProcessedCard";
import { NewPayoutCard } from "./components/NewPayoutCard";

export default function App(){
    return(
        <div className="h-screen bg-[#fafbfb]">
            <div  className="grid grid-cols-4 gap-5">
                <NewPayoutCard amount={"2,312.23"} orders={23} />
                <AmountPendingCard amount={"92,312.20"} orders={13}/>
                <AmountProcessedCard amount={"23,92,312.19"} />
            </div>
        </div>
    )
}
