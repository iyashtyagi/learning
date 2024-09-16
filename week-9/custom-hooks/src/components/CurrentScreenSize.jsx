import useScreenSize from "../hooks/useScreenSize";

export default function CurrentScreenSize(){
    const size = useScreenSize();
    return <div>
        Size of the window: {size.width}px {size.height}px
    </div>
}
