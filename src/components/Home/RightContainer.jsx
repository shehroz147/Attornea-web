import React from 'react';

export default function RightContainer() {
  return (
    <div className="right-sidebar">
    <div className="sidebar-title">
        <h4>Events</h4>
        <a href="#">See All</a>
    </div>
    <div className="event">
        <div className="left-event">
            <h3>18</h3>
            <span>March</span>
        </div>
        <div className="right-event">
            <h4>Social Media</h4>
            <p><i className="fas fa-map-marker-alt"></i> Willson Tech Park</p>
            <a href="#">More Info</a>
        </div>
    </div>
    <div className="event">
        <div className="left-event">
            <h3>22</h3>
            <span>June</span>
        </div>
        <div className="right-event">
            <h4>Mobile Marketing</h4>
            <p><i className="fas fa-map-marker-alt"></i> Willson Tech Park</p>
            <a href="#">More Info</a>
        </div>
    </div>
    <div className="sidebar-title">
        <h4>Advertisement</h4>
        <a href="#">close</a>
    </div>
    <img src="https://i.postimg.cc/CLXYx9BL/advertisement.png" className="siderbar-ads"/>
    <div className="sidebar-title">
        <h4>Conversation</h4>
        <a href="#">Hide Chat</a>
    </div>
    <div className="online-list">
        <div className="online">
            <img src="https://i.postimg.cc/XNPtfdVs/member-1.png"/>
        </div>
        <p>Iqra Aziz</p>
    </div>
    <div className="online-list">
        <div className="online">
            <img src="https://i.postimg.cc/4NhqByys/member-2.png"/>
        </div>
        <p>Ahmed Ali</p>
    </div>
    <div className="online-list">
        <div className="online">
            <img src="https://i.postimg.cc/FH5qqvkc/member-3.png"/>
        </div>
        <p>Sana Shehzad</p>
    </div>
    
</div>
  );
}
