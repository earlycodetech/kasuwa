import { createContext,useState } from "react";

const AppContext = createContext();

function AppProvider ({children}) {
    const [isSignin,setIsSignedin] = useState(false);
    const [uid,setUid] = useState(null);
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');

    return (
        <AppContext.Provider value={{isSignin,setIsSignedin,uid,setUid,firstName,setFirstName,lastName,setLastName}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}