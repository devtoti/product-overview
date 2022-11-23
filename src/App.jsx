import Card from './components/Card'
import NotificationsPage from './components/NotificationsPage'
import './index.css'
import { Outlet, Link } from "react-router-dom";
import { useState, useContext } from 'react'
import { reactProjects } from "./components/reactProjects"
import ReactDOM from "react-dom/client";
import ReferenceDataContextProvider, { ReferenceDataContext } from './components/AppContextProvider';
import Gallery from './components/Gallery';


const App = () => {
 
  const [isPreviewing, setIsPreviewing] = useState(false)
  const { currComponent, setCurrComponent } = useContext(ReferenceDataContext)
  
  return (
   
      <>
      <nav>
        {isPreviewing &&  <svg onClick={() => setIsPreviewing(false)}xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg>}
       
      </nav>

      
      <Outlet />
  
      {isPreviewing ? currComponent : <Gallery isPreviewing={isPreviewing} setIsPreviewing={setIsPreviewing}/>}
      </>
  )
}
export default App
