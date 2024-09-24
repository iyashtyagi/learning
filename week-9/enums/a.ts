// without enums
type KeyInput = "up" | "down" | "left" | "right";

// with enums

enum Direction {
    up = "up",
    down = "down",
    left ="left",
    right = "right"
}

function doSomething(keyPressed: Direction){
    // do something

    if(keyPressed == Direction.up){

    }

    //
}

doSomething(Direction.up);
doSomething(Direction.down);
console.log(Direction);
console.log(Direction.up);
console.log(Direction.down);
console.log(Direction.left);
