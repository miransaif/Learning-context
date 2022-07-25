import React,{useState} from "react";
import SuperMan from "./Context";

const Provider = props => {
    
    const[mission, setMission] = useState({
        mname : "Go to Russia",
        agent : "007",
        accept : "Not Accept"
    })

    return(
        <SuperMan.Provider 
        value={{
            data : mission,
            isMissionAccepted : () => {
                setMission({...mission, accept:"ACCEPTED"})
            }
        }}>
            {props.children}
        </SuperMan.Provider>
    )
}


export default Provider