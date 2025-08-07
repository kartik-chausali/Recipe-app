

import {createContext, useState} from 'react'


type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

function DarkModeProvider(props:{children: React.ReactNode}){

    const [darkMode , setDarkMode] = useState(false);

    const toggleDarkMode = ()=>{
        setDarkMode(prev => !prev)
    }

    return <DarkModeContext.Provider value={{darkMode , toggleDarkMode}}>
        {props.children}
    </DarkModeContext.Provider>

}

export {DarkModeContext , DarkModeProvider}
