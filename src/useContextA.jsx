import React,{ useState, createContext } from "react";
import ComponentB from "./useContextB.jsx";

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Rithas");

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            < UserContext.Provider value={user}>
            <ComponentB user={user}></ComponentB>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA 