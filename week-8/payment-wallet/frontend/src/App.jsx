import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignupPage from "./pages/SignupPage"
import SigninPage from "./pages/SigninPage"
import DashboardPage from "./pages/DashboardPage"
import SendPage from "./pages/SendPage"

export default function App(){

    return(<div className="bg-[#cbd4e0] min-h-screen">
    
    <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/signin" element={<SigninPage />}></Route>
            <Route path="/dashboard" element={<DashboardPage />}></Route>
            <Route path="/send" element={<SendPage />}></Route>
        </Routes>
    </BrowserRouter>

    </div>)
}