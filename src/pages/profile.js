import React from 'react'
import CreatePost from '../component/createPost';
import ProfilefeedRoute from '../component/profilefeedRoute';
import NavbarAfterLogin from '../layout/navbarAfterLogin';
import UserProfileDetails from '../component/userProfileDetails';
import "./style/profile.css"

const Profile = () => {
  return (
    <div>
      <NavbarAfterLogin />
      <div className='profile-div'>

        <div className='sidemenuLeft'>
          <UserProfileDetails />
        </div>

        <div className='content clearfix'>

          <div>
            <CreatePost />
          </div>

          <h3>Your Post</h3>

          <div>
            <ProfilefeedRoute />
          </div>
        </div>

        <div className='sidemenuRight'>
          <div class="right-section">
            <div>
              <div class="sidebar-title">
                <h4>Events</h4>
                <a target="_blank" rel="noopener noreferrer" href="https://mahmudsust.netlify.app/">See All</a>
              </div>

              <div class="event">
                <div class="left-event">
                  <h3>18</h3>
                  <span>March</span>
                </div>
                <div class="right-event">
                  <h4>Social Media</h4>

                  <p><i class="fa-solid fa-location-dot"></i>   Willson Tech Park</p>
                  <a target="_blank" rel="noopener noreferrer" href="https://mahmudsust.netlify.app/">More Info</a>
                </div>
              </div>
              <div class="event">
                <div class="left-event">
                  <h3>18</h3>
                  <span>March</span>
                </div>
                <div class="right-event">
                  <h4>Social Media</h4>

                  <p><i class="fa-solid fa-location-dot"></i>   Willson Tech Park</p>
                  <a  target="_blank" rel="noopener noreferrer" href="https://mahmudsust.netlify.app/">More Info</a>
                </div>
              </div>

              <div class="sidebar-title">
                <h4>Tags</h4>
                <a target="_blank" rel="noopener noreferrer" href="https://mahmudsust.netlify.app/">Close</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;