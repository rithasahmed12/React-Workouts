import React, {useState,useEffect,useRef} from "react";

function MyComponent(){

    const inputRef1 = useRef(0);
    const inputRef2 = useRef(0);
    const inputRef3 = useRef(0);
    

    useEffect(()=> {
        console.log("COMPONENT RENDERED");
    })

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
        
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow"
        inputRef1.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow"
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
    }

    return(
        <div>
        <button onClick={handleClick1}>
        Click Me 1
        </button>
        <input ref={inputRef1} />
        <br />
        <button onClick={handleClick2}>
        Click Me 2
        </button>
        <input ref={inputRef2} />
        <br />
        <button onClick={handleClick3}>
        Click Me 3
        </button>
        <input ref={inputRef3} />

        </div>)
}

export default MyComponent