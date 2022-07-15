import React from 'react'
import CreatePost from '../component/createPost';
import ProfilefeedRoute from '../component/profilefeedRoute';
import NavbarAfterLogin from '../layout/navbarAfterLogin';

const Profile = () => {
  return (
    <div>
      <NavbarAfterLogin />
      <div className='profile-div'>

        <div className='sidemenuLeft'>
          <h3>Image</h3>
          <h3>Name</h3>
          <button>Edit Profile</button>
        </div>

        <div className='content'>
          <div>
            <CreatePost />
          </div>
          <div style={{ textAlign: "center", backgroundColor: "#037bfc", margin: "0 43% 0 43%" }}>
            <h3 style={{color:"white", textAlign:"center", padding:"4px 8px"}}>Your Posts</h3>
          </div>

          <ProfilefeedRoute />
        </div>

        <div className='sidemenuRight'>
          <h3>Event</h3>
          <h3>Date</h3>
        </div>
      </div>
    </div>
  )
}

export default Profile;