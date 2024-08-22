import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

export default function SignupPage(){
    
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Signup"}/>
                <SubHeading label={"Enter your information to create an account"} />
                <InputBox label={"First Name"} placeholder={"Yash"}/>        
                <InputBox label={"Last Name"} placeholder={"Tyagi"}/>        
                <InputBox label={"Email"} placeholder={"example@gmail.com"}/>        
                <InputBox label={"Password"} placeholder={"124456"}/>   
                <div className="pt-4">
                    <Button label={"Sign up"} />
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>
}