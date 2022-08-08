import axios from "axios";
import React, { useEffect, useState } from "react";
import LogoutRoute from "./logoutRoute";
import userphoto from "../asset/user.png"
import EditProfile from "./editProfile";

function UserProfileDetails() {

    const [user, setUser] = useState([{}]);
    const [message, setMessage] = useState("");
    const [openEditPost, setOpenEditPost] = useState(false);
    const [forceLogout, setForceLogout] = useState(false);

    useEffect(() => {
        axios("/profileDetails")
            .then(res => {
                console.log(res.data.rows);
                setUser(res.data.rows);
            })
            .catch(err => {
                if (err.response.status === 500) {
                    setMessage(err.response.statusText);
                }
                else if (err.response.status === 401) {
                    setForceLogout(true);
                }
            })
    }, [])

    const handleEdit = () => {
        console.log("Button is Clicked");
        setOpenEditPost(true);
    }

    return (

        <div >

            <div>
                <div style={{ textAlign: "center" }}>
                    <img src={userphoto} width="100px" height="100px" alt='user' />

                    <h3 >{user[0].name}</h3>
                    <h3>Email: {user[0].email}</h3>
                    <h3>Total Blog: {user[0].totalBlogs}</h3>
                    <button className='editProfileButton' onClick={handleEdit}>Edit Profile</button>
                </div>

                {openEditPost && <EditProfile userid={user[0].userid} name={user[0].name} email={user[0].email} />}
                
            </div>

            {message && <h3>{message}</h3>}
            {
                forceLogout && <LogoutRoute />
            }

        </div>
    )
}

export default UserProfileDetails;