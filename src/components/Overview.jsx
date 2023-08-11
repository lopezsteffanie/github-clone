import React from 'react';
import lists from '../lists.json'

function Overview() {
    return (
        <div className="overview">
            <div className="overviewDescription">
                <p>StevieCodesIt / README.md</p>
                <h1>Hi I'm Stevie 👋 </h1>
                <div className="line" />
                <h2>A Full-Stack Developer</h2>
                <p>
                With a strong background as a teacher specializing in mathematics, I transitioned into software engineering with a focus on back-end development. 
                </p>
                <p>
                Leveraging my experience in education, I bring a unique perspective to my team, enabling me to tackle problems and design solutions that optimize user experiences, streamline processes, and enhance accessibility to all users.
                </p>
            </div>

            <div className="repositories">
                <div className="repositories">
                    <h2>Popular repositories</h2>
                </div>

                <div className="repositoriesContainer">
                    {lists.map((repo, i) => (
                        <div className="repositoriesBox" key={i}>
                            <div className="repositoriesTop">
                                <h3>{repo.repo}</h3>
                                <p>{repo.status}</p>
                            </div>
                            <div className="repositoriesBottom">
                                <p>{repo.stack}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Overview