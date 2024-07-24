import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { userSelectorAtom, usernameAtom } from "./atoms/githubAtom"
import { Suspense, useState } from "react";

export default function App(){

    return(<>
        <RecoilRoot>
            <Suspense fallback ={<div>Loading</div>}>
                <GithubInfoCard/>
            </Suspense>
        </RecoilRoot>
    </>)
    
}

function GithubInfoCard(){
    const [inputValue, setInputValue] = useState("");
    const setUsername = useSetRecoilState(usernameAtom);
    const userData = useRecoilValue(userSelectorAtom);

    function onClickHandler(){
        console.log("re-render");
        setUsername(inputValue);
        setInputValue("");
    }

    return(
        <div>
            <input onChange={(e)=>(setInputValue(e.target.value))} placeholder="Enter the username" value={inputValue} />
            <button onClick={onClickHandler}> Submit </button>
            <Card userData={userData} />
        </div>  
    )
}

function Card({userData}){
    console.log(userData)

    if (!userData) {
        return <></>;
    }

    if (!userData.success) {
        return (
            <div>User doen't exist</div>
        )
    }

    userData = userData.data;

    return(<div id="container">
        <p><b>Username : </b>{userData.login}</p>
        <img src={userData.avatar_url} alt={`${userData.login}_avatar`}/>
        {JSON.stringify(userData)}
    </div>)

}