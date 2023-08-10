import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import lists from "../lists.json"
import img2 from '../img/img2.png';

function MainLeft() {
    return (
        <div className="mainLeftContainer">
            <div className="mainLeft">
                <div className="mainLeftName">
                    <img src={img2} alt="" />
                    <h2>StevieCodesIt</h2>
                    <IoMdArrowDropdown />
                </div>

                {/* Line */}
                <div className="line" />

                {/* Recent Repo */}
                <div className="recentRepo">
                    <div className="recentRepos">
                        <h2>Recent Repositories</h2>
                        <button>New</button>
                    </div>

                    <div className="inputBox">
                        <input type="text" placeholder="Find a repository..." />
                    </div>
                </div>

                <div className="mainLeftLists">
                    {lists.map((item, idx) => (
                        <div className="item" key={idx}>
                            <img src={img2} alt="" />
                            <div>
                                <h2>{`${item.name}/${item.repo}`}</h2>
                            </div>
                        </div>
                    ))}
                    <a href="#">Show more</a>
                </div>

                <div className="line" />

                <div className="recentRepo">
                        <div className="recentRepos">
                            <h2>Recent Activities</h2>
                        </div>
                        <p>Thanks for watching</p>
                </div>

                <div className="line" />

                <div className="recentRepo">
                    <div className="recentRepos">
                        <h2>Your teams</h2>
                    </div>

                    <div className="inputBoxTwo">
                        <input type="text" placeholder="Find a team..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLeft