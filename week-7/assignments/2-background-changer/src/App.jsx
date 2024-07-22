import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { styleAtom } from "./atoms";

export default function App(){
	return(
		<RecoilRoot>
			<BackgroundThemeButtons />
		</RecoilRoot>
	)
}

function BackgroundThemeButtons(){
	const styles = useRecoilValue(styleAtom);
	return(<div className="container" style={styles}>
		<div className="main-div" style={{
			background : "#dbdada",
			textAlign : "center",
			width : "max-content",
			height : "max-content",
			padding : 10,
			borderRadius : 10,
			bottom: 30,
			position: "absolute",
		}}>
			<CustomButton> Red </CustomButton>
			<CustomButton> Yellow </CustomButton>
			<CustomButton> Black </CustomButton>
			<CustomButton> Purple </CustomButton>
			<CustomButton> Green </CustomButton>
			<CustomButton> Blue </CustomButton>
			<CustomButton> Default </CustomButton>
		</div>
	</div>)
}

function CustomButton({children}){
	const fontColor = ["yellow", "default"].includes(children.trim().toLowerCase())?"black":"white";
	const setStyle = useSetRecoilState(styleAtom);
	const bgColor = children.trim().toLowerCase()=="default"?"white":children;
	return(<>
		<button onClick={()=>{setStyle((prev)=>({...prev,background : bgColor}))}} style={{
			background : children, 
			color: fontColor, 
			margin : 10,
			borderRadius : 10,
			height : 30,
			width : 80,
			fontWeight: "bold"}}
		> {children} </button>
	</>)
}

