import { createContext,useState } from "react";

const AppContext = createContext();

function AppProvider ({children}) {
    const [isSignIn,setIsSignedIn] = useState(false);
    const [uid,setUid] = useState(null);
    const [firstName,setFirstName] = useState(null);
    const [lastName,setLastName] = useState(null);

    return (
        <AppContext.Provider value={{isSignIn,setIsSignedIn,uid,setUid,firstName,setFirstName,lastName,setLastName}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext,AppProvider }