import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { CiDark , CiLight} from "react-icons/ci";

function DarkModeToggle() {
  const context = useContext(DarkModeContext);

  if(!context){
     throw new Error('DarkModeContext must be used within a DarkModeProvider');
  }

  const {darkMode , toggleDarkMode} = context
  
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? <CiDark/> : <CiLight/>} 
    </button>
  );
}

export default DarkModeToggle;