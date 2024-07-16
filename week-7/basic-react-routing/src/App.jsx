import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";
import { NavBar } from './components/NavBar';

export default function App(){

    return (
        <>
            <NavBar></NavBar>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/" element = {<Landing/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}