import axios from "axios";
import React, { useEffect, useState } from "react";
import LogoutRoute from "./logoutRoute";
import userphoto from "../asset/user.png"
import EditProfile from "./editProfile";
import "./style/userProfileDetails.css"

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

function UserProfileDetails() {

    const [user, setUser] = useState([{}]);
    const [message, setMessage] = useState("");
    const [openEditPost, setOpenEditPost] = useState(false);
    const [forceLogout, setForceLogout] = useState(false);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

    // const handleEdit = () => {
    //     setOpenEditPost(true);
    // }

    return (

        <div className="profileDetails-container">

            <div className="userDetails">
                <div style={{ textAlign: "center" }}>
                    <img src={userphoto} width="100px" height="100px" alt='user' />

                    <h3 >{user[0].name}</h3>
                    <h3>Email: {user[0].email}</h3>
                    {/* <button className='editProfileButton' onClick={handleEdit}>Edit Profile</button> */}
                    <div>
                        {/* <Button className="editProfileButton"
                            onClick={handleClickOpen}>
                           Edit Profile
                        </Button> */}

                        <button className='editProfileButton'
                         onClick={handleClickOpen}>Edit Profile</button>

                        <Dialog open={open} onClose={handleClose}>

                            <DialogTitle>
                               Edit Profile
                            </DialogTitle>

                            <DialogContent>
                                <DialogContentText>
                                    <EditProfile userid={user[0].userid} name={user[0].name} email={user[0].email} />
                                </DialogContentText>
                            </DialogContent>

                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Close
                                </Button>
                                {/* <Button onClick={handleClose} color="primary" autoFocus>
                                    Yes
                                </Button> */}
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>

                {/* {openEditPost && <EditProfile userid={user[0].userid} name={user[0].name} email={user[0].email} />} */}

            </div>
            <div className="userPostDetails">
                <div>
                    <h3>Total Blog: {user[0].totalBlogs}</h3>
                </div>
                <div className="link">
                    <a href="#profile">See all blogs</a>
                </div>
            </div>
            <div className="userFriendDetails">
                <div>
                    <h3>Blogs You Follow</h3>
                </div>
                <div className="link">
                    <a href="#profile">See all</a>
                </div>
            </div>

            {message && <h3>{message}</h3>}
            {
                forceLogout && <LogoutRoute />
            }

        </div>
    )
}

export default UserProfileDetails;