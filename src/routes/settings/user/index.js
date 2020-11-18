import React from 'react';
import  "./index.css";
// import classes from '../user/index.module.css';

class user extends React.Component {
    render() {
        return(
            <div class="main1" >
                <h1>Account Settings</h1>
                <h2>Profile</h2>
                <div class="body">
                    <div class="wrapper">
                        <label class="item-wrapper">First Name</label>
                        <input class="input-field" type="text" value="Lajat"/>
                        <div class="input-field-underline">
                            <hr aria-hidden="true" class="under-line1" />
                            <hr aria-hidden="true" class="under-line2" />
                        </div>
                    </div>
                    <div class="wrapper">
                        <label class="item-wrapper">Last Name</label>
                        <input class="input-field" type="text" value="Panda"/>
                        <div class="input-field-underline">
                            <hr aria-hidden="true" class="under-line1" />
                            <hr aria-hidden="true" class="under-line2" />
                        </div>
                    </div>
                    <div class="wrapper">
                        <label class="item-wrapper">Company</label>
                        <input class="input-field" type="text" value="Ebisu"/>
                        <div class="input-field-underline">
                            <hr aria-hidden="true" class="under-line1" />
                            <hr aria-hidden="true" class="under-line2" />
                        </div>
                    </div>
                </div>
                <div class="body">
                    <div class="user-settings-subtitle">
                        <span>LANGUAGE SETTINGS</span>
                    </div>
                    <div class="user-settings-label">
                        <span>Language</span>
                    </div>
                    <div class="detail-view-dropdown" >
                        <label class="dropdown-label" >
                            <select class="dropdown1" >
                                <option class="dropdown-option" >English</option>
                                <option class="dropdown-option" >Français</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div class="user-settings-subtitle">
                        <span>UNIT SETTINGS</span>
                    </div>
                    <div class="user-settings-label">
                        <span>Temperature Unit</span>
                    </div>
                    <div class="detail-view-dropdown" >
                        <label class="dropdown-label" >
                            <select class="dropdown1" >
                                <option class="dropdown-option" >Celcius</option>
                                <option class="dropdown-option" >Farhenheit</option>
                                <option class="dropdown-option" >Kelvin</option>
                            </select>
                        </label>
                    </div>

                    <div class="user-settings-subtitle">
                        <span>NOTIFICATION SETTINGS</span>
                    </div>
                    <div style={{marginTop: "20px"}} class="body" >
                        <div class="user-settings-label">
                            <span>Notify Me Via...</span>
                        </div>
                        <div class="check-box-default" >
                            <input class="checkBox" type="checkbox" value="on" checked />
                            <div class="checkbox-description-wrapper">
                                <div class="checkbox-description" >
                                    <div class="body" >
                                        <svg class="svg-styling1" viewBox="0 0 24 24" >
                                            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" ></path>
                                        </svg>
                                        <svg class="svg-styling2" viewBox="0 0 24 24" >
                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" ></path>
                                        </svg>
                                    </div>
                                </div>
                                <label class="checkbox-description-label" >In-app notification</label>
                            </div>
                        </div>
                        <div class="check-box" >
                            <input class="checkBox" type="checkbox" name="emailnotifications" value="on" checked />
                            <div class="checkbox-description-wrapper">
                                <div class="checkbox-description" >
                                    <div class="body" >
                                        <svg class="svg-styling3" viewBox="0 0 24 24" >
                                            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" ></path>
                                        </svg>
                                        <svg class="svg-styling4" viewBox="0 0 24 24" >
                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" ></path>
                                        </svg>
                                    </div>
                                </div>
                                <label style={{color: "#212121"}} class="checkbox-description-label" >Email</label>
                            </div>
                        </div>
                        <div class="check-box" >
                            <input class="checkBox" type="checkbox" name="emailnotifications" value="on" checked />
                            <div class="checkbox-description-wrapper">
                                <div class="checkbox-description" >
                                    <div class="body" >
                                        <svg class="svg-styling5" viewBox="0 0 24 24" >
                                            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" ></path>
                                        </svg>
                                        <svg class="svg-styling6" viewBox="0 0 24 24" >
                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" ></path>
                                        </svg>
                                    </div>
                                </div>
                                <label style={{color: "#212121"}} class="checkbox-description-label" >SMS</label>
                            </div>
                        </div>

                        <div class="user-settings-label">
                            <span>Notification Frequency</span>
                        </div>
                        <div class="detail-view-dropdown" >
                            <label class="dropdown-label" >
                                <select class="dropdown" >
                                    {/* <option class="dropdown-option" value="ALWAYS" value="ON_SHIFT" >Always send me notifications</option> */}
                                    <option class="dropdown-option" value="ALWAYS" >Don't send me notifications</option>
                                    <option class="dropdown-option" value="ON_SHIFT" >Always send me notifications</option>
                                    <option class="dropdown-option" value="ON_SHIFT" >Only send me notifications when I'm on shift</option>
                                    <option class="dropdown-option" value="ON_SHIFT" >Send me notifications if no one is on shift</option>
                                    {/* <option class="dropdown-option" value="OFF" >Don't send me notifications</option> */}
                                </select>
                            </label>
                        </div>
                        <div class="user-settings-label">
                            <span>Notify Me If...</span>
                        </div>
                        <div class="check-box" >
                            <input class="checkBox" type="checkbox" name="alertNotifications" value="on" checked />
                            <div class="checkbox-description-wrapper">
                                <div class="checkbox-description" >
                                    <div class="body" >
                                        <svg class="svg-styling3" viewBox="0 0 24 24" >
                                            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" ></path>
                                        </svg>
                                        <svg class="svg-styling4" viewBox="0 0 24 24" >
                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" ></path>
                                        </svg>
                                    </div>
                                </div>
                                <label style={{color: "#212121"}} class="checkbox-description-label" >An entity alert is triggered</label>
                            </div>
                        </div>
                        <div class="check-box" >
                            <input class="checkBox" type="checkbox" name="commentTagNotifications" value="on" checked />
                            <div class="checkbox-description-wrapper">
                                <div class="checkbox-description" >
                                    <div class="body" >
                                        <svg class="svg-styling3" viewBox="0 0 24 24" >
                                            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" ></path>
                                        </svg>
                                        <svg class="svg-styling4" viewBox="0 0 24 24" >
                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" ></path>
                                        </svg>
                                    </div>
                                </div>
                                <label style={{color: "#212121"}} class="checkbox-description-label" >Somebody tags me in a comment</label>
                            </div>
                        </div>
                        <div class="check-box" >
                            <input class="checkBox" type="checkbox" name="incidentApproveNotifications" value="on" checked />
                            <div class="checkbox-description-wrapper">
                                <div class="checkbox-description" >
                                    <div class="body" >
                                        <svg class="svg-styling3" viewBox="0 0 24 24" >
                                            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" ></path>
                                        </svg>
                                        <svg class="svg-styling4" viewBox="0 0 24 24" >
                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" ></path>
                                        </svg>
                                    </div>
                                </div>
                                <label style={{color: "#212121"}} class="checkbox-description-label" >An incident report requires my approval</label>
                            </div>
                        </div>
                        <div class="check-box" >
                            <input class="checkBox" type="checkbox" name="marketingNotifications" value="on" checked />
                            <div class="checkbox-description-wrapper">
                                <div class="checkbox-description" >
                                    <div class="body" >
                                        <svg class="svg-styling3" viewBox="0 0 24 24" >
                                            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" ></path>
                                        </svg>
                                        <svg class="svg-styling4" viewBox="0 0 24 24" >
                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" ></path>
                                        </svg>
                                    </div>
                                </div>
                                <label style={{color: "#212121"}} class="checkbox-description-label" >New Features are added to iSAM</label>
                            </div>
                        </div>

                        <div class="btn-wrapper" >
                            <button class="btn1" >
                                <div>
                                    <div class="btn-name-wrapper" >
                                        <span class="btn-name">Save</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="user-settings-subtitle2">
                        <span>Email Address</span>
                    </div>
                    <div class="wrapper">
                        <label class="item-wrapper">New Email Address</label>
                        <input class="input-field" type="text" value="Lajat1997@gmail.com"/>
                        <div class="input-field-underline">
                            <hr aria-hidden="true" class="under-line1" />
                            <hr aria-hidden="true" class="under-line2" />
                        </div>
                    </div>
                    <div class="wrapper">
                        <label class="item-wrapper">Password</label>
                        <input class="input-field" type="password" value="Lajat997"/>
                        <div class="input-field-underline">
                            <hr aria-hidden="true" class="under-line1" />
                            <hr aria-hidden="true" class="under-line2" />
                        </div>
                    </div>
                    <div class="btn-wrapper" >
                        <button class="btn1" >
                            <div>
                                <div class="btn-name-wrapper" >
                                    <span class="btn-name">Save</span>
                                </div>
                            </div>
                        </button>
                    </div>

                    <div class="user-settings-subtitle2">
                        <span>Password</span>
                    </div>
                    <div class="wrapper">
                        <label class="item-wrapper">Current Password</label>
                        <input class="input-field" type="password"/>
                        <div class="input-field-underline">
                            <hr aria-hidden="true" class="under-line1" />
                            <hr aria-hidden="true" class="under-line2" />
                        </div>
                    </div>
                    <div class="wrapper">
                        <label class="item-wrapper">New Password</label>
                        <input class="input-field" type="password"/>
                        <div class="input-field-underline">
                            <hr aria-hidden="true" class="under-line1" />
                            <hr aria-hidden="true" class="under-line2" />
                        </div>
                    </div>
                    <div class="btn-wrapper" >
                        <button class="btn1" >
                            <div>
                                <div class="btn-name-wrapper" >
                                    <span class="btn-name">Save</span>
                                </div>
                            </div>
                        </button>
                    </div>

            </div>
        );
    }
}

export default user;