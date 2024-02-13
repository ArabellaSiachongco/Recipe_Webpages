import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom";


export default function Sidebar({links, close}){
    const location = useLocation()
    return(
        // the sidebar 'X' wont close because 
        // i use box-shadow and not the actual html
        <div className="sidebar" onClick={close}>
            {links.map(link => (
                <Link to={link.path} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key={link.name}>
                    <FontAwesomeIcon icon = {link.icon} />
                    {link.name}
                </Link>
            ))}
        </div>
        // click on the white bar to close the sidebar
    )
}