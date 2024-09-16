import { useEffect, useState } from 'react'
import './App.css'
import DataFetching from './components/DataFetching';
import OnlineStatus from './components/OnlineStatus';
import MousePointer from './components/MousePointer';
import TimerBased from './components/TimerBased';
import CurrentScreenSize from './components/CurrentScreenSize';
import SearchBar from './components/SearchBar';


function App() {
    return <div>
        <DataFetching />
        <OnlineStatus />
        <MousePointer />
        <CurrentScreenSize />
        <TimerBased />
        <SearchBar />
    </div>
}

export default App;
