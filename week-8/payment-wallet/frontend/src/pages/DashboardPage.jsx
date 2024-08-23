import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";

export default function DashboardPage(){
    
    return <div className="bg-white h-screen">
        <AppBar />
        <Balance value={"10,000"}/>
        <Users />
    </div>
}