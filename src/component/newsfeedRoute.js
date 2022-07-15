import axios from "axios";
import React, { useEffect, useState } from "react";
import {NewsFeedCard} from './newsCard';

function NewsfeedRoute() {

    const [backEndData, setBackEndData] = useState([{}]);

    useEffect(() => {
        axios("/allblogpost")
            .then(res => {
                console.log(res.data.rows);
                setBackEndData(res.data.rows);
            })
    }, [])

    return (
        <div style={{margin:"0 25% 0 25%"}}>
            {(typeof backEndData === 'undefined') ? (
                <p>UserList Loading.....</p>
            ) :
                (
                    backEndData.map((post, i) => <NewsFeedCard key={i} author={post.name} newsTitle={post.title} newsContent={post.content} />)
                )
            }
        </div>
    )
}

export default NewsfeedRoute;