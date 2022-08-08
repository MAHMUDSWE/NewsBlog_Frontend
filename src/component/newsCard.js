import { useState } from "react";
import DeletePost from "./deletePost";
import EditPost from "./editPost";
import "./style/newsCard.css"

function NewsFeedCard(props) {

    const { author, newsTitle, newsContent } = props;
    return (
        <div className='newsCard-Container'>
            <div className="title-author">
                <h3 className='newsTitle'>{newsTitle}</h3>
                <p style={{ color: "blue" }}>Author: {author}
                    <br />
                    Posted on: 07-04-2022
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

    const { newsBlogId, newsTitle, newsContent } = props;

    const [openEditPost, setOpenEditPost] = useState(false);
    const [openDeletePost, setOpenDeletePost] = useState(false);

    const handleEdit = () => {
        console.log("Button is Clicked");
        setOpenEditPost(true);
    }
    const handleDelete = () => {
        console.log("Button is Clicked");
        setOpenDeletePost(true);
    }

    return (
        <div className='Profile-newsCard-Container'>

            <div className="title-time">
                <h3 className='newsTitle'>{newsTitle}</h3>
                <p style={{ color: "blue" }}>
                    Posted on: 07-04-2022
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
                        {openEditPost && <EditPost newsBlogId={newsBlogId} newsTitle={newsTitle} newsContent={newsContent} />}
                        {openDeletePost && <DeletePost newsBlogId={newsBlogId} />}
                        <button onClick={handleEdit} className="editPostButton">Edit Post</button>
                        <button onClick={handleDelete} className="deletePostButton">Delete</button>
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