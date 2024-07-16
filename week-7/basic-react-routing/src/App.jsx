import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";
import { NavBar } from './components/NavBar';

export default function App(){

    return (
        <>
            <BrowserRouter>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/" element = {<Landing/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}