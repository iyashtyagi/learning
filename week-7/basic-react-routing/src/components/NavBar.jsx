import { useNavigate } from "react-router-dom";

export function NavBar(){

    const navigate = useNavigate();

    function landingClick(){
        navigate("/");
    }

    function dashboardClick(){
        navigate("/dashboard");
    }

    return(
        <div style={{color:"gold",
            background : "black",
            fontSize : "100px"
        }}>
            This is a Navbar.

            <button onClick={landingClick}>Landing page</button>
            <button onClick={dashboardClick}>Dashboard</button>     
        </div>

    )
}