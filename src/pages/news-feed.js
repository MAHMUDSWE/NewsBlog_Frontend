import React from 'react'
import NewsfeedRoute from '../component/newsfeedRoute';
import NavbarAfterLogin from '../layout/navbarAfterLogin';
import "./style/news-feed.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import CreatePost from '../component/createPost';

function NewsFeed() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <NavbarAfterLogin />
      <div className='newsFeed-div'>

        <div className='leftMenu column'>
          <h3>News Catagoires</h3>
          <div className='leftMenuElement'>
            <ul>
              <li><a href="#sports">Sports</a></li>
              <li><a href="#local_politics" class="active">Local Politics</a></li>
              <li><a href="#international_polics">International Politics</a></li>
              <li><a href="#cricket">Cricket</a></li>
              <li><a href="#footbal">Footbal</a></li>
              <li><a href="#champions_league">Champions League</a></li>
              <li><a href="#footbal_wc">Footbal World Cup</a></li>
            </ul>
          </div>
        </div>

        <div className='contentMenu contentMenuClearfix'>
          <div className='createPost-container'>
            <Button variant="outlined"
              color="primary" onClick={handleClickOpen}>
              Create New Post
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>

              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <CreatePost />
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
          <div>
            <h3 className='numberOfBlogs'>Showing ......... Blogs on Local Politics</h3>
          </div>
          <div>
            <NewsfeedRoute />
          </div>
        </div>

        <div className='rightMenu'>
          <div class="search-container">
            <form action="/news_feed">
              <input type="text" placeholder="Search Blog...." name="search" />
              <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
          </div>

          <div className='trending-container'>
            <h3>Trending Blog for you</h3>
            <div className='trending-contents'>
              <div className='trending-content'>
                <p>Cricket . Trending</p>
                <h4>#ICCRankings</h4>
                <p>1,099 Blogs</p>
              </div>
              <div className='trending-content'>
                <p>Entertainment . Trending</p>
                <h4>#ChrisHemsworth</h4>
                <p>1,099 Blogs</p>
              </div>
              <div className='trending-content'>
                <p>Football . Trending</p>
                <h4>#LionelMessi</h4>
                <p>2,369 Blogs</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
export default NewsFeed;