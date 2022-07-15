import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProfileFeedCard } from './newsCard';

function ProfilefeedRoute() {

    const [backEndData, setBackEndData] = useState([{}]);

    useEffect(() => {
        axios("/blogpost")
            .then(res => {
                console.log(res.data.rows);
                setBackEndData(res.data.rows);
            })
    }, [])

    return (
        <div>
            {(typeof backEndData === 'undefined') ? (
                <p>UserList Loading.....</p>
            ) :
                (
                    backEndData.map((post, i) => <ProfileFeedCard key={i} newsTitle={post.title} newsContent={post.content} />)
                )
            }
        </div>
    )
}

export default ProfilefeedRoute;