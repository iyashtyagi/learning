import useMousePointer from "../hooks/useMousePointer";

export default function MousePointer(){
    const mousePointer = useMousePointer();
    return <div>
        Your mouse position is {mousePointer.x}x {mousePointer.y}y 
    </div>
}

