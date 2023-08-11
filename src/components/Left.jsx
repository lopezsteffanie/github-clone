import React from 'react';
import { MdInsertEmoticon } from 'react-icons/md';
import img2 from '../img/img2.png';

function Left() {
    return (
        <div className="left">
            <div className="image">
                <img src={img2} alt="" />
                <div className="emoticonBox">
                    <MdInsertEmoticon className="emoticon" />
                </div>
            </div>

            <div className="leftDetails">
                <h2>StevieCodesIt</h2>
                <button>Edit profile</button>
            </div>
        </div>
    )
}

export default Left