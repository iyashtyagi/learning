import { useState } from "react"
import Button from "./Button"

export default function Users(){
    const [users, setUsers] = useState([{
        firstName: "Yash",
        lastName: "Tyagi",
        _id: 1
    }])
    return <div className="mx-4">
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <input className="w-full my-2 px-2 py-1 border rounded border-slate-200" type="text" placeholder="Search users..." />
        <div>
            {users.map((user)=><User user={user}/>)}
        </div>
    </div>
}

function User({user}){
    return (<div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>

            <div className="flex flex-col justify-center h-full">
                {user.firstName + " " + user.lastName}
            </div>
        </div>

        <div className="flex flex-col justify-center mt-2 h-full">
            <Button label={"Send Money"}/>
        </div>
    </div>)
}