import React, {useState} from 'react'
import {sidebarData} from '../Data/SidebarData'
import './SideBar.css'
const SideBar = (props) => {

    var clickedContext =  React.createContext(null);
    const [countryClicked, setCountryClicked] = useState('USA');

    const clickHandler = (e) =>{
        setCountryClicked(e.target.id);
        props.click(e.target.id)
    }
    return(
        <div className= 'sidebar'>
            <ul >
                {
                    sidebarData.map(items => (
                        <li key={items.id} id={items.country} className={items.country===countryClicked && 'active'} onClick={(e) => {clickHandler(e)}}>{items.country}({items.itemLength})</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SideBar