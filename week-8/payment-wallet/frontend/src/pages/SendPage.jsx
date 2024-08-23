import { useState } from "react";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

export default function SendPage(){

    const [user, setUser] = useState({
        firstName: "Yash",
        lastName: "Tyagi",
        _id: 1
    })
    
    return <div className="flex justify-center h-screen bg-gray-100">
    <div className="h-full flex flex-col justify-center">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
            <div className="flex justify-center space-y-1.5 p-6">
                <Heading label={"Send Money"}/>
            </div>
            <div className="p-6">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-2xl text-white">{user.firstName[0]}</span>
                    </div>
                    <h3 className="text-2xl font-semibold">{`${user.firstName} ${user.lastName}`}</h3>
                </div>
                <div className="space-y-4">
                    <InputBox label={"Amount (in Rs)"} type={"number"}/>
                    <Button label={"Initiate Transfer"} color={"green"}/>
                </div>
            </div>
    </div>
  </div>
</div>
}