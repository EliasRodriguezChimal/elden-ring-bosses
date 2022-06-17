import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
            <Link
                className="navbar-brand"
                to="/limgrave"
            >
                <img className="elden-ring-logo" src="/assets/EldenRing-lg.png" />
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className='nav-item nav-link ms-1 me-1'
                        to="/limgrave"
                    >
                        Limgrave
                    </NavLink>

                    <NavLink
                        className='nav-item nav-link ms-1 me-1'
                        to="/altusplateau"
                    >
                        Altus Plateu
                    </NavLink>

                    <NavLink
                        className='nav-item nav-link ms-1 me-1'
                        to="/liurnia"
                    >
                        Liurnia
                    </NavLink>

                    <NavLink
                        className='nav-item nav-link ms-1 me-1'
                        to="/consecratedsnowfield"
                    >
                        Consecrated Snowfield
                    </NavLink>

                    <NavLink
                        className='nav-item nav-link ms-1 me-1'
                        to="/caelid"
                    >
                        Caelid
                    </NavLink>

                    <NavLink
                        className='nav-item nav-link ms-1 me-1'
                        to="/dragonbarrow"
                    >
                        Dragonbarrow
                    </NavLink>

                    <NavLink
                        className='nav-item nav-link ms-1 me-1'
                        to="/weepingpeninsula"
                    >
                        Weeping Peninsula
                    </NavLink>

                    <NavLink
                        className='nav-item nav-link ms-1 me-1'
                        to="/mountaintopsgiants"
                    >
                        Mountaintops
                    </NavLink>

                    <NavLink
                        className='nav-item nav-link ms-1 me-1'
                        to="/mountgelmir"
                    >
                        Mount Gelmir
                    </NavLink>
                </div>
            </div>
            <NavLink
                className='btn btn-outline-light btn-sm'
                to="/search"
            >
                Search
            </NavLink>
        </nav>
    )
}