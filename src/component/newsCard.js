import React from "react";
import { useState } from "react";
import DeletePost from "./deletePost";
import EditPost from "./editPost";
import "./style/newsCard.css"

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';



function NewsFeedCard(props) {

    const { author, newsTitle, newsContent, newsCreateTime } = props;
    return (
        <div className='newsCard-Container'>
            <div className="title-author">
                <h3 className='newsTitle'>{newsTitle}</h3>
                <p style={{ color: "blue" }}>Author: {author}
                    <br />
                    Posted on: {newsCreateTime}
                </p>
            </div>

            <div>
                <p className='newsDesc'>{newsContent}</p>
            </div>

            <div className="newsButtons">
                <div>
                    <button>Like</button>
                    <button>Reply</button>
                    <button>Repost</button>
                </div>
                <div>
                    <button>Share</button>
                </div>
            </div>
        </div>
    )

}

function ProfileFeedCard(props) {

    const { newsBlogId, newsTitle, newsContent, newsCreateTime } = props;

    const [openEditPost, setOpenEditPost] = useState(false);
    const [openDeletePost, setOpenDeletePost] = useState(false);

    const handleEdit = () => {
        console.log("Button is Clicked");
        setOpenEditPost(true);
    }
    const handleDeleteOpen = () => {
        setOpenDeletePost(true);
    }
    const handleDeleteClose = () => {
        setOpenDeletePost(false);
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='Profile-newsCard-Container'>

            <div className="title-time">
                <h3 className='newsTitle'>{newsTitle}</h3>
                <p style={{ color: "blue" }}>
                    Posted on: {newsCreateTime}
                </p>
            </div>

            <div className='newsdDesc'>
                <p >{newsContent}</p>
            </div>

            <div className="newsButtons">
                <div className="like-repost-share">
                    <button>Like</button>
                    <button>Repost</button>
                    <button>Share</button>
                </div>
                <div>
                    <div>
                        {/* {openEditPost && <EditPost newsBlogId={newsBlogId} newsTitle={newsTitle} newsContent={newsContent} />} */}
                        {/* {openDeletePost && <DeletePost newsBlogId={newsBlogId} />} */}
                        {/* <button onClick={handleEdit} className="editPostButton">Edit Post</button> */}

                        <button onClick={handleClickOpen}
                            className="editPostButton">Edit Post</button>

                        <Dialog open={open} onClose={handleClose}>

                            <DialogTitle>
                                Edit Post
                            </DialogTitle>

                            <DialogContent>
                                <DialogContentText>
                                    <EditPost newsBlogId={newsBlogId} newsTitle={newsTitle} newsContent={newsContent} />
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
                        {/* <button onClick={handleDelete} className="deletePostButton">Delete</button> */}
                        <button onClick={handleDeleteOpen}
                            className="deletePostButton">Delete</button>

                        <Dialog open={openDeletePost} onClose={handleClose}>

                            <DialogTitle>
                                Permanently delete the post?
                            </DialogTitle>

                            <DialogContent>
                                <DialogContentText>
                                    <DeletePost newsBlogId={newsBlogId} />
                                </DialogContentText>
                            </DialogContent>

                            <DialogActions>
                                <Button onClick={handleDeleteClose} color="primary">
                                    Close
                                </Button>
                                {/* <Button onClick={handleDeleteClose} color="primary" autoFocus>
                                    Yes
                                </Button> */}
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>



        </div>
    )

}

export {
    NewsFeedCard,
    ProfileFeedCard
}