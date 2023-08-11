import React, { useState } from 'react'
import img2 from '../img/img2.png';
import { FiBell, FiPlus } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Menu from './Menu';

function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            {/*Left*/}
            <div className="navLeft">

            <Link to="/">
                <div className="navLeftIcon">
                    <FaGithub />
                </div>
            </Link>

                <div>
                    <input type="text" placeholder="Search" />
                </div>
            </div>

            {/*Center*/}
            <div className="navCenter">
                <h2>Pulls</h2>
                <h2>Issues</h2>
                <h2>Marketplace</h2>
                <h2>Explore</h2>
            </div>

            {/*Right*/}
            <div className="navRight">
                <FiBell />
                <div className="navRightIcons">
                    <FiPlus />
                    <IoMdArrowDropdown />
                </div>

                <div className="navRightIcons" onClick={() => setShowMenu(!showMenu)}>
                    <img src={img2} alt="" />
                </div>
            </div>

            {showMenu && <Menu />}
        </nav>
    )
}

export default Navbar
