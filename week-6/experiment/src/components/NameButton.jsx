export function NameButton(props){

    function buttonHandler(){
        const randomNum = Math.random();
        props.setName(randomNum);
    }

    return (
        <>
            <button onClick={buttonHandler}>Click me to change the name</button>
        </>
    )
}