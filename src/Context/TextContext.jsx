import { createContext ,useState } from "react";


export const textcontext = createContext(null)




const TextContext = (props)=>{
    const [tasks, settasks] = useState(JSON.parse(localStorage.getItem("tasks"))||[]);
    return <textcontext.Provider value={[tasks,settasks]}>
        {props.children}
    </textcontext.Provider>

}

export default TextContext