import { AmountPendingCard } from "./components/AmountPendingCard";

export default function App(){
    return(
        <div className="">
            <div  className="grid grid-cols-4">
                <AmountPendingCard amount={"92,312.20"} orders={13}/>
            </div>
        </div>
    )
}
