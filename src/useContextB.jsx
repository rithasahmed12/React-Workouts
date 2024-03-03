import ComponentC from "./useContextC.jsx"

function ComponentB(){
    return(
        <div className="box">
            <h1>Component B</h1>
            <ComponentC></ComponentC>

        </div>
    )
}

export default ComponentB