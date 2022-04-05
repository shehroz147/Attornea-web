import React from 'react';

export default function PostInput() {
  return (
    <div className="write-post-container">
    <div className="user-profile">
        <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"/>
        <div>
            <p>Naveed Ahmed</p>
            <small>Public <i className="fas fa-caret-down"></i></small>
        </div>
    </div>
    <div className="post-input-container">
        <textarea rows="3" placeholder="What's on your mind?"></textarea>
        <div className="add-post-links">
            <a href="#"><img src="https://i.postimg.cc/QMD2BDXs/live-video.png"/>Live Video</a>
            <a href="#"><img src="https://i.postimg.cc/6pKKZn0D/photo.png"/>Photo/Video</a>
            <a href="#"><img src="https://i.postimg.cc/Pf6TBCdD/feeling.png"/>Feling/Activity</a>
        </div>
    </div>
</div>

  );
}
