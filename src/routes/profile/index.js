import React from 'react';
import '../profile/index.css';

class profile extends React.Component {
    render() {
        return(
            // <div><iframe src="http://165.22.217.213/public/dashboards/VenAwImx9TEwjVRn6dR39Oh7FtIOI5mJWQILNXfQ?org_slug=default" width="720" height="391" scrolling = "no" and frameBorder = "0"></iframe></div> 
            <div class="main-profile">

              <div class="profile-header">
                <span class="profile-header-avatar" ><img src="//www.gravatar.com/avatar/63fe79646c923f5a9f9e3c7f8882449e" alt="Profile image is provided by Gravatar" /></span>
                <span class="profile-header-title">My Profile - Test Stil</span>
              </div>

              <div class="user-stats">
                <div class="user-stats-wrapper" ><span>User Stats</span></div>
                <div class="stats-timer-icon">
                  <svg class="timer-icon" viewBox="0 0 24 24" ><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
                </div>
                <div>Join Date</div>
                <div class="text-styling" >Joined a day ago</div>
              </div>

              <div class="profile-section" >
                <div class="label-wrapper" >
                  <label>
                    <select class="profile-select"></select>
                  </label>
                </div>
              </div>

            </div>
        );
    }
}

export default profile;
