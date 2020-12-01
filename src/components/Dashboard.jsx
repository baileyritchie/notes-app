import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faPlusCircle} />

function Dashboard() {
    return(
        <div>
        
       <h1 className="header"> Notes App</h1>
       <span className="add-note">{element}</span>
        </div>
    )
}
export default Dashboard