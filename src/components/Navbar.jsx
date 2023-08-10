import React from 'react'
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import { FiBell, FiPlus } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';

function Navbar() {
    return (
        <nav className="navbar">
            {/*Left*/}
            <div className="navLeft">
                <img src={img1} alt="" />

                <div>
                    <input type="text" placeholder="Search or jump to" />
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

                <div className="navRightIcons">
                    <img src={img2} alt="" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
