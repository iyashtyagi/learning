import {memo} from 'react';

let counter = 0;

export const Header = memo((props) => {


    console.log(`render count: ${++counter} ${JSON.stringify(props)}`);

    return (
        <div>
            <h1>My name is {props.name}</h1>
        </div>
    );
});