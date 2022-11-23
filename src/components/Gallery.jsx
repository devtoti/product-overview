import React, {useState, useContext} from 'react'
import { reactProjects } from "./reactProjects.jsx"
import ReferenceDataContextProvider, { ReferenceDataContext } from './AppContextProvider';
function Gallery({...props}) {
    const {setIsPreviewing} = props
    const [projects, setProjects] = useState(reactProjects)
    const [isActive, setIsActive] = useState(false)
    const { currComponent, setCurrComponent } = useContext(ReferenceDataContext)
    const handleClick = p => {
      setCurrComponent(p.component)
      setIsPreviewing(prev => !prev)
    }
  return (
    <div className="App">
     {!isActive && projects.map((p, id) => {
        return (
          <div className="gallery_card" onClick={props => handleClick(p)} key={id}>
            <h3>
              {id + " " + p.name}
              </h3>
            <div className="gallery_img">

            <img src={p.img} alt="" />
            </div>
          </div>
        )
    })}
    </div>
  )
}

export default Gallery