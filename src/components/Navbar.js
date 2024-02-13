import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const location = useLocation()
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: 'Home',
            path: '/',
            icon: faHome
        },
        {
            name: 'Recipes',
            path: '/recipes',
            icon: faList
        }
    ]

    function closeSidebar() {
        setShowSidebar(false)
    }

    return (
        <>
            <div className="navbar container">
                <a href="#!" className="logo">B<span>rio</span>Sliced</a>
                <div className="nav-links">
                    {
                        links.map(link => (
                            <Link to={link.path} className={location.pathname === link.path ? "active" : ""} key={link.name}>{link.name}</Link>
                        ))
                    }

                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSidebar &&
                <Sidebar close={closeSidebar}
                    links={links} />
            }
        </>
    )
}