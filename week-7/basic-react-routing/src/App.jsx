import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavBar } from './components/NavBar';
import React, { Suspense } from 'react';

const Dashboard = React.lazy(()=> import("./components/Dashboard"));
const Landing = React.lazy(()=> import("./components/Landing"));

export default function App(){

    return (
        <>
            <BrowserRouter>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/dashboard" element={<Suspense fallback={"loading"}><Dashboard/></Suspense>} />
                    <Route path="/" element = {<Suspense fallback={"loading"}><Landing/></Suspense>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}