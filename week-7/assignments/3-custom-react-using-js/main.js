function render(children){
    const parent = document.getElementById("root");
    parent.appendChild(children);
}

const reactElement = "Click me to visit google";

function htmlGen(){
    const children = document.createElement("a");
    children.href = "https://www.google.com";
    children.text = reactElement;
    return children;
}

render(htmlGen());